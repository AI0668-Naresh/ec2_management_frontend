import React, { useState } from "react";
import '../static/css/register.css'; // Register-specific CSS
import showpassword from '../static/media/sleep-unscreen.gif'; // Show password GIF
import hidepassword from '../static/media/view-unscreen.gif'; // Hide password GIF

function Register({ handleRegister , username, password, setUsername, setPassword, user}) {
  const [employeeId, setEmployeeId] = useState("");
  const [mailId, setMailId] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accessRole, setAccessRole] = useState("");
  
  // Single state for both password fields
  const [showPasswordFields, setShowPasswordFields] = useState(false);

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    handleRegister({ employeeId, username, mailId, password, accessRole });
  };

  const togglePasswordVisibility = () => {
    setShowPasswordFields(!showPasswordFields);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="card-body">
          <h2>Register</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Employee ID"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Mail ID"
              value={mailId}
              onChange={(e) => setMailId(e.target.value)}
            />
          </div>
          <div className="form-group password-container">
            <input
              type={showPasswordFields ? "text" : "password"} // Shared state for both fields
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="password-toggle-container">
              <img
                src={showpassword}
                alt="Show Password"
                className={`password-toggle-icon ${showPasswordFields ? "hidden" : ""}`}
                onClick={togglePasswordVisibility}
              />
              <img
                src={hidepassword}
                alt="Hide Password"
                className={`password-toggle-icon ${!showPasswordFields ? "hidden" : ""}`}
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <div className="form-group password-container">
            <input
              type={showPasswordFields ? "text" : "password"} // Shared state for both fields
              className="form-control"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {/* <div className="password-toggle-container">
              <img
                src={showpassword}
                alt="Show Password"
                className={`password-toggle-icon ${showPasswordFields ? "hidden" : ""}`}
                onClick={togglePasswordVisibility}
              />
              <img
                src={hidepassword}
                alt="Hide Password"
                className={`password-toggle-icon ${!showPasswordFields ? "hidden" : ""}`}
                onClick={togglePasswordVisibility}
              />
            </div> */}
          </div>
          <div className="form-group access-role">
            <label className="access-role-label">Access Role:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="accessRole"
                  value="Admin"
                  checked={accessRole === "Admin"}
                  onChange={(e) => setAccessRole(e.target.value)}
                />
                Admin
              </label>
              <label>
                <input
                  type="radio"
                  name="accessRole"
                  value="Pro Access"
                  checked={accessRole === "Pro Access"}
                  onChange={(e) => setAccessRole(e.target.value)}
                />
                Pro Access
              </label>
              <label>
                <input
                  type="radio"
                  name="accessRole"
                  value="Rookie"
                  checked={accessRole === "Rookie"}
                  onChange={(e) => setAccessRole(e.target.value)}
                />
                Rookie
              </label>
            </div>
          </div>
          <div>
            <button onClick={handleSubmit} className="register-btn">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
