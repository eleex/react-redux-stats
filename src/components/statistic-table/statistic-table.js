import React, { Component } from "react";
import { connect } from "react-redux";

import withUserstoreService from "../hoc";
import { usersRequested, usersLoaded, usersError } from "../../actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./statistic-table.css";

const StatisticTable = ({ users, page_count, current_page }) => {
  
  const showUsers = users.slice(
    (current_page - 1) * page_count,
    page_count * current_page
  );

  const tableRow = showUsers.map((user) => {
    return (
      <tr key={user.id}>
        <td className="table__id">{user.id}</td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.email}</td>
        <td>{user.gender}</td>
        <td>{user.ip_address}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>IP address</th>
        </tr>
      </thead>
      <tbody>{tableRow}</tbody>
    </table>
  );
};

class StatisticTableContainer extends Component {
  componentDidMount() {
    const {
      usersRequested,
      usersLoaded,
      usersError,
      userstoreService,
    } = this.props;
    usersRequested();
    userstoreService
      .getUsers()
      .then((data) => usersLoaded(data))
      .catch((error) => usersError(error));
  }

  render() {
    const { loading, users, error, page_count, current_page } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <StatisticTable
        users={users}
        page_count={page_count}
        current_page={current_page}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    page_count: state.page_count,
    current_page: state.current_page,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = {
  usersRequested,
  usersLoaded,
  usersError,
};

export default withUserstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(StatisticTableContainer)
);
