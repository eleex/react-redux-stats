import React from "react";
import { UserstoreServiceConsumer } from "../userstore-service-context";

const withUserstoreService = () => Wrapped => {
  return props => {
    return (
      <UserstoreServiceConsumer>
        {userstoreService => {
          return <Wrapped {...props} userstoreService={userstoreService} />;
        }}
      </UserstoreServiceConsumer>
    );
  };
};

export default withUserstoreService;
