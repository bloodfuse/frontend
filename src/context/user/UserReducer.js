const UserReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_TRUE":
      return {
        ...state,
        loading: true,
      };
    case "LOAD_FALSE":
      return {
        ...state,
        loading: false,
      };
    case "LOGIN": {
      sessionStorage.setItem("loginState", true);

      sessionStorage.setItem("refreshToken", action.payload.refreshToken);

      return {
        ...state,
        loginState: true,
        username: action.payload.username,
        email: action.payload.emailAddress,
        refreshToken: action.payload.refreshToken,
      };
    }
    case "LOGOUT": {
      sessionStorage.removeItem("loginState");
      return {
        ...state,
        loginState: false,
      };
    }
    default:
      return state;
  }
};

export default UserReducer;
