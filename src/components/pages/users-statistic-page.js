import React from "react";
import StatisticTable from "../statistic-table";
import Pagination from "../pagination";

import "./users-statistic-page.css";

const UsersStatisticPage = () => {
  return (
    <div className="users">
      <div className="users__wrapper">
        <h3 className="users__header">Users statistics</h3>
        <StatisticTable />
        <Pagination />
      </div>
    </div>
  );
};

export default UsersStatisticPage;
