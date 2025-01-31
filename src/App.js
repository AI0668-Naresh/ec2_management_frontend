

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
import Doterminateinstance from './components/Doterminateinstance';
import Dctodigitalocean from './components/Dctodigitalocean';
import Doinsertips from './components/Doinsertips';
import Awscreateprefix from './components/Awscreateprefix';

function App() {
  const token_c = Cookies.get("access_token");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [user, setUser] = useState(null);  // User state
  const navigate = useNavigate();
  const PREFIX_URI = "http://192.168.1.39:8000/";

  useEffect(() => {
    const savedToken = Cookies.get('access_token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const handleRegister = async (obj) => {
    try {
      // console.log(`${PREFIX_URI}register`, { username, password });
      const response = await axios.post(
        `${PREFIX_URI}register`,
        obj,
        {
          headers: {
            Authorization: `Bearer ${token_c}`,
          },
        }
      );
      console.log(response.data);
      navigate("/login");
      alert(response.data.data);
    } catch (error) {
      alert('Error registering user');
    }
  };

  const handleLogin = async () => {
    try {
      console.log(`${PREFIX_URI}login`, { username, password });
      const response = await axios.post(`${PREFIX_URI}login`, { username, password });
      const access_token = response.data;
      Cookies.set('access_token', access_token, { expires: 7 });
      Cookies.set('username', username, { expires: 1 });
      setToken(access_token);
      setUser(response.data.logged_in_as);  // Set user data
      navigate("/home");
      alert('Login successful');
    } catch (error) {
      alert('Login failed');
    }
  };

  const handleLogout = () => {
    Cookies.remove('access_token');
    setToken('');
    setUser(null);  // Clear user data
    alert('Logged out');
  };

  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/home"
          element={<ProtectedRoute prefix_uri={PREFIX_URI} element={<Home />} />}
        />
        <Route
          path="/"
          element={<ProtectedRoute prefix_uri={PREFIX_URI} element={<Home user={user} />} />}
        />
        <Route
          path="/instancelist"
          element={<ProtectedRoute prefix_uri={PREFIX_URI} element={<Table user={user} />} />}
        />
        <Route
          path="/prefixlist"
          element={<ProtectedRoute prefix_uri={PREFIX_URI} element={<Table user={user} />} />}
        />
        <Route
          path="/subnetlist"
          element={<ProtectedRoute prefix_uri={PREFIX_URI} element={<Table user={user} />} />}
        />
        <Route
          path="/SGlist"
          element={<ProtectedRoute prefix_uri={PREFIX_URI} element={<Table user={user} />} />}
        />
        <Route
          path="/amilist"
          element={<ProtectedRoute prefix_uri={PREFIX_URI} element={<Table user={user} />} />}
        />
        <Route
          path='/launch_digitalocean_instances'
          element={<ProtectedRoute prefix_uri={PREFIX_URI} element={<Docreateinstance user={user} prefix_uri={PREFIX_URI}/>} />} />
        <Route
          path='/terminate_digitalocean_instances'
          element={<ProtectedRoute prefix_uri={PREFIX_URI} element={<Doterminateinstance user={user} prefix_uri={PREFIX_URI} />} />} />
        <Route
          path='/Dctodigitalocean'
          element={<ProtectedRoute prefix_uri={PREFIX_URI} element={<Dctodigitalocean user={user} prefix_uri={PREFIX_URI} />} />} />
        <Route
          path='/insert_launched_digitalocean_instances_to_mongo'
          element={<ProtectedRoute prefix_uri={PREFIX_URI} element={<Doinsertips user={user} prefix_uri={PREFIX_URI}/>} />} />
        <Route
          path='/createinstance'
          element={<ProtectedRoute prefix_uri={PREFIX_URI} element={<Createinstance user={user} prefix_uri={PREFIX_URI}/>} />} />
        <Route
          path="/Dolaunch"
          element={<ProtectedRoute prefix_uri={PREFIX_URI} element={<Dolaunch user={user} prefix_uri={PREFIX_URI}/>} />}
        />
        <Route
          path="/AWSlaunch"
          element={<ProtectedRoute prefix_uri={PREFIX_URI} element={<AWSlaunch user={user} prefix_uri={PREFIX_URI}/>} />}
        />
        <Route
          path="/Awscreateprefix"
          element={<ProtectedRoute prefix_uri={PREFIX_URI} element={<Awscreateprefix user={user} prefix_uri={PREFIX_URI}/>} />}
        />
        <Route
          path="/about"
          element={<ProtectedRoute prefix_uri={PREFIX_URI} element={<About user={user} prefix_uri={PREFIX_URI}/>} />}
        />
        <Route
          path="/register"
          element={<ProtectedRoute prefix_uri={PREFIX_URI} element={<Register user={user} prefix_uri={PREFIX_URI} handleRegister={handleRegister} username={username} password={password} setUsername={setUsername} setPassword={setPassword} />} />}
        />
        <Route
          path="/login"
          element={<Login prefix_uri={PREFIX_URI} handleSubmit={handleLogin} username={username} password={password} setUsername={setUsername} setPassword={setPassword} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
