import React from "react";
import { Link } from "react-router-dom";

import "./app-header.css";

const AppHeader = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <span className="header__logo">AppCo</span>
      </div>
    </header>
  );
};

export default AppHeader;
