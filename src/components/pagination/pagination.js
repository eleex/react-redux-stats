import React from "react";
import { connect } from "react-redux";
import PaginationListItems from "../pagination-items";
import { PaginationPrevItem, PaginationNextItem } from "../pagination-arrows";

import "./pagination.css";

const Pagination = ({ data }) => {
  if (data.length === 0) {
    return null;
  }

  return (
    <ul className="pagination">
      <PaginationPrevItem />
      <PaginationListItems />
      <PaginationNextItem />
    </ul>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    data: users,
  };
};

export default connect(mapStateToProps)(Pagination);
