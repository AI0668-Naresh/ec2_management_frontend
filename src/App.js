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
import Dolaunch from './components/Dolaunch';
import AWSlaunch from './components/AWSlaunch';
import Table from './components/Table';
import Createinstance from './components/Createinstance';
import Error from './components/Error';
import Register from './components/Register';
import Docreateinstance from './components/Docreateinstance';
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
      const response = await axios.post('http://192.168.1.109:5000/register', { username, password });
      navigate("/login");
      alert('User registered successfully');
    } catch (error) {
      alert('Error registering user');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.1.109:5000/login', { username, password });
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
          path="/"
          element={<ProtectedRoute element={<Home />} />}
        />
        <Route
          path="/instancelist"
          element={<ProtectedRoute element={<Table />} />}
        />
        <Route
          path='/Docreateinstance'
          element={<ProtectedRoute element={<Docreateinstance />} />} />
        <Route
          path='/createinstance'
          element={<ProtectedRoute element={<Createinstance />} />} />
        <Route
          path="/Dolaunch"
          element={<ProtectedRoute element={<Dolaunch />} />}
        />
        <Route
          path="/AWSlaunch"
          element={<ProtectedRoute element={<AWSlaunch />} />}
        />
        <Route
          path="/about"
          element={<ProtectedRoute element={<About />} />}
        />
        <Route
          path="/register"
          element={<ProtectedRoute element={<Register handleRegister={handleRegister} username={username} password={password} setUsername={setUsername} setPassword={setPassword} />} />}
        />
        <Route
          path="/login"
          element={<Login handleSubmit={handleLogin} username={username} password={password} setUsername={setUsername} setPassword={setPassword} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
