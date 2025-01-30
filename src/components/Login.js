// import React, { useRef } from "react";
// import '../static/css/login.css';
// import showpassword from '../static/media/sleep-unscreen.gif'; // Show password GIF
// import hidepassword from '../static/media/view-unscreen.gif'; // Hide password GIF

// function Login({ handleSubmit, username, password, setUsername, setPassword }) {
//   const [showPassword, setShowPassword] = React.useState(false);
//   const passwordRef = useRef(null); // Reference for password input
  

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleKeyPress = (e, field) => {
//     if (e.key === 'Enter') {
//       if (field === "username") {
//         passwordRef.current.focus(); // Move to password field
//       } else if (field === "password") {
//         handleSubmit(); // Submit only when Enter is pressed in password field
//       }
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <div className="card-body">
//           <h2>Login</h2>
//           <div className="form-group mb-3">
//             <input
//               type="text"
//               className="form-control"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="User Name"
//               onKeyDown={(e) => handleKeyPress(e, "username")} // Move to password on Enter
//             />
//           </div>
//           <div className="form-group password-container">
//             <input
//               type={showPassword ? "text" : "password"}
//               className="form-control"
//               id="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               onKeyDown={(e) => handleKeyPress(e, "password")} // Submit on Enter
//               ref={passwordRef} // Reference for password input
//             />
//             <div className="password-toggle-container">
//               <img
//                 src={showpassword}
//                 alt="Show Password"
//                 className={`password-toggle-icon ${showPassword ? "hidden" : ""}`}
//                 onClick={togglePasswordVisibility}
//               />
//               <img
//                 src={hidepassword}
//                 alt="Hide Password"
//                 className={`password-toggle-icon ${!showPassword ? "hidden" : ""}`}
//                 onClick={togglePasswordVisibility}
//               />
//             </div>
//           </div>
//           <div>
//             <button onClick={handleSubmit} className="login-btn">
//               Login
//             </button>
//           </div>

//           <p>
//             Don't have an account? <a href="/register">Register</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useRef, useState } from "react";
import '../static/css/login.css';
import showpassword from '../static/media/sleep-unscreen.gif'; // Show password GIF
import hidepassword from '../static/media/view-unscreen.gif'; // Hide password GIF

function Login({ handleSubmit, username, password, setUsername, setPassword }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const passwordRef = useRef(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleKeyPress = (e, field) => {
    if (e.key === 'Enter') {
      if (field === "username") {
        passwordRef.current.focus();
      } else if (field === "password") {
        handleLogin();
      }
    }
  };

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await handleSubmit();
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="card-body">
          <h2>Login</h2>

          {/* Username Input */}
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="User Name"
              onKeyDown={(e) => handleKeyPress(e, "username")}
            />
          </div>

          {/* Password Input */}
          <div className="form-group password-container">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e, "password")}
              ref={passwordRef}
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

          {/* Login Button with Loading Spinner */}
          <button onClick={handleLogin} className="login-btn" disabled={isLoading}>
            {isLoading ? <span className="spinner"></span> : "Login"}
          </button>

          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
