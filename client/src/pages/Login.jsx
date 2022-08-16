import React from "react";
import Background from "../components/Background";
import LoginForm from "../components/LoginForm";

function Login() {
    return(
        <>
        <div className="Login">
            <Background/>
            <LoginForm/>
        </div>
        </>
    )
}

export default Login;