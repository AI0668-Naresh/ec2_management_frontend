import React from "react";
function Login({handleSubmit, username, password, setUsername, setPassword, ch}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "2rem",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
        backgroundColor: "#f5f5f5", // optional for a better background contrast
      }}
    >
      <div className="card" style={{ width: "25vw" }}>
        <div className="card-body">
          <h2>Login</h2>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
            
          </div>
          <div>
            <button onClick={handleSubmit}>Login</button>
          </div>
          <div>{ch?
            <p>
            Don't have an account? <a href="/register">Register</a>
          </p>:<p>Alread have an account? <a href="/login">Login</a></p>
            }
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
