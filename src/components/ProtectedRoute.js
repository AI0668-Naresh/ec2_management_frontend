// import React, { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import axios from "axios";
// import Loading from "./Loading";

// const ProtectedRoute = ({ prefix_uri, element, ...rest }) => {
//   const token = Cookies.get("access_token");
//   const [ckuser, setCkuser] = useState(null);
//   const [user, setUser] = useState(null);

//   const handleProtected = async () => {
//     if (!token) return;

//     try {
//       console.log(`${prefix_uri}protected`);
//       console.log(`Bearer ${token}`)
//       const response = await axios.get(`${prefix_uri}protected`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log(response);
//       console.log(response.data);
//       setUser(response.data.logged_in_as);
//       setCkuser(true);
//     } catch (error) {
//       setCkuser(false);  
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       handleProtected();
//     } else {
//       setCkuser(false); 
//     }
//   }, [token,element]);

//   if (ckuser === null) {
//     return <Loading />;
//   }

//   if (!token || ckuser === false) {
//     return <Navigate to="/login" />;
//   }

//   // Use React.cloneElement to pass username as a prop
//   const clonedElement = React.cloneElement(element, { user });

  

//   return clonedElement;
// };

// export default ProtectedRoute;




import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import Loading from "./Loading";

const ProtectedRoute = ({ prefix_uri, element, ...rest }) => {
  const token = Cookies.get("access_token");
  const [ckuser, setCkuser] = useState(null);
  const [user, setUser] = useState(null);

  const handleProtected = async () => {
    if (!token) return;

    try {
      const response = await axios.get(`${prefix_uri}protected`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response);
      
      // Assuming `logged_in_as` is the field containing user info
      setUser(response.data.payload);
      setCkuser(true);
    } catch (error) {
      setCkuser(false);
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (token) {
      handleProtected();
    } else {
      setCkuser(false); // If no token, redirect to login page
    }
  }, [token]); // Only depend on `token`

  if (ckuser === null) {
    return <Loading />;
  }

  if (!token || ckuser === false) {
    return <Navigate to="/login" />;
  }
  // console.log(user);
  const clonedElement = React.cloneElement(element, { user });

  return clonedElement;
};

export default ProtectedRoute;
