import React from "react";
const Login = () => {
  return (
    <div>
      <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Login</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign in</button>
        </form>
        <p>
         You don't have an account? <a href="#">Register</a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
