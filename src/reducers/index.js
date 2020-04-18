const initialState = {
  users: [],
  page_count: 25,
  current_page: 1,
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        users: [],
        page_count: 25,
        current_page: 1,
        loading: true,
        error: null,
      };

    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case "FETCH_USERS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "SET_CURRENT_PAGE":
      return {
        ...state,
        current_page: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
