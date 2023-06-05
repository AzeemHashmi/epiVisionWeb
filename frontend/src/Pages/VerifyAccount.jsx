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
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { activateAccount } from "../actions/auth";


function VerifyAccount() {
  const [loginToggle, setLoginToggle] = useState(true);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate()
  const params = useParams()



  const verifyHandler = () =>{
    console.log(params)
    activateAccount(params,navigate)
  }

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
         <h2 className="h2 fw-bold pt-4 pb-3 mx-auto">Verify Account</h2>
         <button style={{borderRadius:'10px solid black',backgroundColor:"lightblue", padding:'5px'}} onClick={verifyHandler}>Click to Verify</button>

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

export default VerifyAccount;
