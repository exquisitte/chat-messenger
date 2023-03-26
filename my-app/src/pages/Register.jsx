import React from "react";
const Register = () => {
  return (
    <div>
      <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Register</span>
        <form>
          <input type="text" placeholder="Display name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }}  type="file" />
          <label htmlFor="file">
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>
          Maybe you have an account? <a href="./pages/Login">Login</a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Register;
