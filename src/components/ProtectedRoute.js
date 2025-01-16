import { React, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const ProtectedRoute = ({ element, ...rest }) => {
  const token = Cookies.get("access_token");
  const [ckuser, setCkuser] = useState(null);

  const handleProtected = async () => {
    if (!token) return;

    try {
      const response = await axios.get('http://127.0.0.1:5000/protected', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.logged_in_as);
      setCkuser(true);
      // alert('Protected route accessed: ' + response.data.logged_in_as);
    } catch (error) {
      setCkuser(false);  
      // alert('Access to protected route failed');
    }
  };

  useEffect(() => {
    if (token) {
      handleProtected();
    } else {
      setCkuser(false); 
    }
  }, [token,element]);

  if (ckuser === null) {
    return <div>Loading...</div>;
  }

  if (!token || ckuser === false) {
    return <Navigate to="/login" />;
  }

  return element; 
};

export default ProtectedRoute;
