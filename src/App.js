import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import { useNavigate } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedToken = Cookies.get('access_token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/register', { username, password });
      navigate("/login");
      alert('User registered successfully');
    } catch (error) {
      alert('Error registering user');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', { username, password });
      const { access_token } = response.data;

      Cookies.set('access_token', access_token, { expires: 7 }); 
      setToken(access_token);
      navigate("/home");
      alert('Login successful');
    } catch (error) {
      alert('Login failed');
    }
  };

  const handleLogout = () => {
    Cookies.remove('access_token');
    setToken('');
    alert('Logged out');
  };

  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <Routes>
        <Route 
          path="/home" 
          element={<ProtectedRoute element={<Home />} />} 
        />
        <Route 
          path="/about" 
          element={<ProtectedRoute element={<About />} />} 
        />
        <Route 
          path="/register" 
          element={<ProtectedRoute element={<Login handleSubmit={handleRegister} username={username} password={password} setUsername={setUsername} setPassword={setPassword} ch={false} />} />} 
        />
        <Route 
          path="/login" 
          element={<Login handleSubmit={handleLogin} username={username} password={password} setUsername={setUsername} setPassword={setPassword} ch={true} />} 
        />
        {/* <Route 
          path="/register" 
          element={<Login handleSubmit={handleRegister} username={username} password={password} setUsername={setUsername} setPassword={setPassword} ch={false} />} 
        /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
