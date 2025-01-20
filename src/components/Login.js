import React from "react";
import '../static/css/login.css';
import showpassword from '../static/media/sleep-unscreen.gif'; // Show password GIF
import hidepassword from '../static/media/view-unscreen.gif'; // Hide password GIF


function Login({ handleSubmit, username, password, setUsername, setPassword }) {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="card-body">
          <h2>Login</h2>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="User Name"
            />
          </div>
          <div className="form-group password-container">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="password-toggle-container">
              <img
                src={showpassword}
                alt="Show Password"
                className={`password-toggle-icon ${showPassword ? "hidden" : ""}`}
                onClick={togglePasswordVisibility}
              />
              <img
                src={hidepassword}
                alt="Hide Password"
                className={`password-toggle-icon ${!showPassword ? "hidden" : ""}`}
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <div>
            <button onClick={handleSubmit} className="login-btn">
              Login
            </button>
          </div>

              <p>
                Don't have an account? <a href="/register">Register</a>
              </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
