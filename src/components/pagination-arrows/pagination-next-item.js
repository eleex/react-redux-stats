import React from "react";
import { connect } from "react-redux";
import { setCurrentPage } from "../../actions";

import "./pagination-next-item.css";

const PaginationNextItem = (props) => {
  const { next, data, page_count, current_page, setCurrentPage } = props;

  const totalPages = Math.ceil(data.length / page_count);

  const disabled = totalPages === current_page ? true : false;

  return (
    <li>
      <button
        className="pagination__next-item"
        onClick={() => {
          setCurrentPage(current_page + 1);
        }}
        disabled={disabled}
        type="button"
      ></button>
    </li>
  );
};

const mapStateToProps = ({ users, page_count, current_page }) => {
  return {
    data: users,
    page_count,
    current_page,
  };
};

const mapDispatchToProps = {
  setCurrentPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationNextItem);
