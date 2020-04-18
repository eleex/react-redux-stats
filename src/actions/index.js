const usersRequested = () => {
  return {
    type: "FETCH_USERS_REQUEST"
  };
};

const usersLoaded = newUsers => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: newUsers
  };
};

const usersError = error => {
  return {
    type: "FETCH_USERS_FAILURE",
    payload: error
  };
};

const setCurrentPage = (page) => {
  return {
    type: "SET_CURRENT_PAGE",
    payload: page
  }
}

export { usersRequested, usersLoaded, usersError, setCurrentPage };
