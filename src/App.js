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

  // for  test
  const instances = [
    {
      "instance_id": "i-04763cf8e2ba5c71c",
      "instance_name": "RE_ST_Optimize_App_Server",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "44.231.52.74",
      "private_ip": "172.31.56.122",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0fd6baa598c69f342",
      "instance_name": "FE_DV__Staging_Web_78_new",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "54.149.157.8",
      "private_ip": "172.31.3.147",
      "ipv6": "N/A",
      "platform": "windows"
    },
    {
      "instance_id": "i-0b4cffb8d9a0ac810",
      "instance_name": "RE_ST_Explorer_PSQL_Staging",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "52.42.52.3",
      "private_ip": "172.31.10.3",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-0f736835e695cafcc",
      "instance_name": "RE_ST_Dashboard_STG",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "18.236.190.154",
      "private_ip": "172.31.44.188",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-07fb018fc492f9b95",
      "instance_name": "RE_ST_EuropeExplorer_STG",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "44.243.222.149",
      "private_ip": "172.31.46.112",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-06803bcd0646b59eb",
      "instance_name": "RE_ST_EuropeExplorer_STG",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "54.149.97.252",
      "private_ip": "172.31.23.204",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    },
    {
      "instance_id": "i-09a36a330f7a8500a",
      "instance_name": "SFTP_ST",
      "account": "Account 365",
      "region": "us-west-2",
      "public_ip": "44.244.184.198",
      "private_ip": "172.31.31.49",
      "ipv6": "N/A",
      "platform": "Linux/UNIX"
    }
  ]





  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/home"
          element={<ProtectedRoute element={<Home />} />}
        />
        <Route
          path="/instancelist"
          element={<ProtectedRoute element={<Table data={instances} />} />}
        />
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
