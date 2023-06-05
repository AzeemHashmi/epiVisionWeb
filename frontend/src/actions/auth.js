import * as api from "../api/index";

//Action Creators

export const signUp = async (formData, setFormData, setLoginToggle) => {
  try {
    // Sign in the user
    console.log(formData);

    const { data } = await api.signUp(formData);

    console.log(data);
    setFormData({});
    setLoginToggle(true);
    alert("User Registered Successfully");

    // dispatch({ type: "LOGIN", data });
  } catch (error) {
    alert("Something Went Wrong");

    console.log(error);
  }
};

export const signIn =
  (formData, setFormData, setLoginToggle,navigate) => async (dispatch) => {
    try {
      // Sign in the user
      console.log(formData);

      const { data } = await api.signIn(formData);

      console.log(data);
      setFormData({});
      setLoginToggle(true);
      dispatch({ type: "LOGIN", payload: data });
      alert("User Logined Successfully");
      navigate('/dashboard/stream')
    } catch (error) {
      alert("Something Went Wrong");

      console.log(error);
    }
  };

export const verifyToken = async(token)  => {
  try {

    console.log(token)

    const { data } = await api.verifyToken(token);

    if (data?.detail) {
      logout();
    } else {
      return true;
    }
  } catch (error) {

    console.log(error);
  }
};

export const logout = (navigate) => async (dispatch) => {
  try {

    dispatch({ type: "LOGOUT" });
    navigate("/");
  } catch (error) {

    console.log(error);
  }
};



export const getProfile = () => async (dispatch) => {
  try {

    const { data } = await api.getProfile();
    console.log(data)
    dispatch({ type: "GET_PROFILE", payload: data });
  } catch (error) {

    console.log(error);
  }
};



export const activateAccount = async(formData,navigate) => {
  try {

    const { data } = await api.activateAccount(formData);
    console.log(data)
    // dispatch({ type: "GET_PROFILE", payload: data });
    navigate('/')
  } catch (error) {

    console.log(error);
  }
};
