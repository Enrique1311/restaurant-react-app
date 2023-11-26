import React from "react";
import "./Login.css";
import TransparentBtn from "../Buttons/TransparentBtn/TransparentBtn";

const Login = () => {
	return (
		<div className="login-buttons">
			<TransparentBtn>Log In / Registration</TransparentBtn>
			<p>|</p>
			<TransparentBtn>Log Out</TransparentBtn>{" "}
		</div>
	);
};

export default Login;
