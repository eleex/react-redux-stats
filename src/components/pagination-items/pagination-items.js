import React from "react";
import { connect } from "react-redux";
import { setCurrentPage } from "../../actions";

import "./pagination-items.css";

const PaginationItems = (props) => {
  const { data, page_count, current_page, setCurrentPage } = props;

  const totalPages = Math.ceil(data.length / page_count);

  const getPagingRange = (current, min = 1, total = totalPages, length = 5) => {
    if (length > total) length = total;

    let start = current - Math.floor(length / 2);
    start = Math.max(start, min);
    start = Math.min(start, min + total - length);

    return Array.from({ length: length }, (el, i) => start + i);
  };

  const paginationItems =  getPagingRange(current_page).map((item) => {
    let btnStyle = "pagination__btn";
    if (item === current_page) {
      btnStyle = "pagination__btn pagination__btn--active";
    }
    return (
      <li key={item}>
        <button
          onClick={() => {
            setCurrentPage(item);
          }}
          className={btnStyle}
          type="button"
        >
          {item}
        </button>
      </li>
    );
  });

  return paginationItems;
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

export default connect(mapStateToProps, mapDispatchToProps)(PaginationItems);
