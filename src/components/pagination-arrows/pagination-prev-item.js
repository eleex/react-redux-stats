import React from "react";
import { connect } from "react-redux";
import { setCurrentPage } from "../../actions";

import "./pagination-prev-item.css";

const PaginationPrevItem = (props) => {
  const { current_page, setCurrentPage } = props;

  const disabled = current_page === 1 ? true : false;

  return (
    <li>
      <button
        className="pagination__prev-item"
        onClick={() => {
          setCurrentPage(current_page - 1);
        }}
        disabled={disabled}
        type="button"
      ></button>
    </li>
  );
};

const mapStateToProps = ({ current_page }) => {
  return {
    current_page,
  };
};

const mapDispatchToProps = {
  setCurrentPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationPrevItem);
