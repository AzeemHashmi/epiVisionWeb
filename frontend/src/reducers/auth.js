export default (state = { authData: null }, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action?.payload);
      localStorage.setItem(
        "epivision_auth",
        JSON.stringify({ ...action?.payload })
      );
      return { ...state, authData: action?.payload };

    case "GET_PROFILE":
      console.log(action?.payload);
    
      return { ...state, profileData: action?.payload };

    case "LOGOUT":
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};
