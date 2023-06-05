import React, { useState } from "react";
import "../css/Login.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import image1 from "../Images/1.png";
import { useNavigate } from "react-router-dom";

import { signUp, signIn } from "../actions/auth";


function Login() {
  const [loginToggle, setLoginToggle] = useState(true);
  const [formData, setFormData] = useState({});

  const dispatch  = useDispatch()
  const navigate = useNavigate();

  const loginHandler = (e) => {
    // console.log(formData)
    // setFormData({})
    e.preventDefault();

    dispatch(signIn(formData, setFormData, setLoginToggle,navigate));

    // navigate("/dashboard/stream");
  };

  console.log(formData);

  const registerHandler = (e) => {
    e.preventDefault()
    console.log(formData);
    signUp(formData, setFormData, setLoginToggle);
    // setFormData({})
    //  navigate('/dashboard/stream')
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6">
          <div id="login-logo" className="d-flex flex-row ps-5 pt-5">
            <MDBIcon
              fas
              icon="clinic-medical fa-3x me-3"
              style={{ color: "#709085" }}
            />
            <span className="h1 fw-bold mb-0">EPIVISION</span>
          </div>

          <div
            id="login-form"
            className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4"
          >
            {loginToggle ? (
              <>
                <h2
                  id="login"
                  className="mb-3 ps-5 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Login
                </h2>
                <form onSubmit={loginHandler}>

               

                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  label="Email address"
                  id="formControlLg"
                  required
                  type="email"
                  value={formData?.email ? formData?.email : ""}
                  size="lg"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  label="Password"
                  required
                  id="formControlLg"
                  type="password"
                  value={formData?.password ? formData?.password : ""}
                  size="lg"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />

                <MDBBtn
                  className="mb-4 px-5 mx-5 w-100"
                  color="info"
                  size="lg"
                >
                  Login
                </MDBBtn>
                </form>
                <p className="small mb-5 pb-lg-3 ms-5">
                  <a class="link-info" href="#!">
                    Forgot password?
                  </a>
                </p>
                <p className="small mb-5 pb-lg-3 ms-5">
                  Don't have account?{" "}
                  <a
                    class="link-info"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setFormData({})
                      setLoginToggle(false);
                    }}
                  >
                    Sign Up{" "}
                  </a>
                </p>
              </>
            ) : (
              <>
                <h2
                  id="login"
                  className="mb-3 ps-5 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Register
                </h2>

                <form onSubmit={registerHandler}>
                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    label="Full Name"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    value={formData?.name ? formData?.name : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  {/* <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    label="Last Name"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    value={formData?.last_name ? formData?.last_name : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, last_name: e.target.value })
                    }
                  /> */}
                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    label="Email address"
                    id="formControlLg"
                    type="email"
                    size="lg"
                    value={formData?.email ? formData?.email : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    value={formData?.password ? formData?.password : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    label="Confirm Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    value={formData?.re_password ? formData?.re_password : ""}
                    onChange={(e) =>
                      setFormData({ ...formData, re_password: e.target.value })
                    }
                  />

                  <MDBBtn
                    style={{ overflow: "none" }}
                    className="mb-4 px-5 mx-5 w-100"
                    color="info"
                    size="lg"
                  >
                    Register
                  </MDBBtn>
                </form>

                <p className="small mb-5 pb-lg-3 ms-5">
                  Already have account?{" "}
                  <a
                    class="link-info"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setFormData({})
                      setLoginToggle(true);
                    }}
                  >
                    Sign In{" "}
                  </a>
                </p>
              </>
            )}

            <div></div>
            {/* <p className='ms-5'>Don't have an account? <a href="#!" class="link-info">Register here</a></p> */}
          </div>
        </MDBCol>

        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img
            src={image1}
            alt="Login image"
            className="w-100"
            style={{ objectFit: "cover", objectPosition: "left" }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
