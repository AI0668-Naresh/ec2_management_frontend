// import React, { useState, useEffect } from "react";
// import '../static/css/register.css';
// import showpassword from '../static/media/sleep-unscreen.gif';
// import hidepassword from '../static/media/view-unscreen.gif';
// import axios from "axios";
// import Cookies from "js-cookie";

// function Register({ handleRegister, username, password, setUsername, setPassword }) {
//   const [employeeId, setEmployeeId] = useState("");
//   const token = Cookies.get("access_token");
//   const [mailId, setMailId] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [accessRole, setAccessRole] = useState("");
//   const [showPasswordFields, setShowPasswordFields] = useState(false);
//   // const [customAccess, setCustomAccess] = useState({}); // Dynamically filled
//   const [doPageAccess, setDoPageAccess] = useState({}); // Dynamically filled
//   const [AwsPageAccess, setAwsPageAccess] = useState({}); // Dynamically filled
//   const [roles, setRoles] = useState([]);
//   const [privileges, setPrivileges] = useState([]);

//   const fetchdata = async () => {
//     try {
//       const response = await axios.get("http://192.168.1.39:8000/get_user_roles_priviliges", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = response.data.data[0]; // Get the first user data entry
//       console.log("Fetched Data:", data);

//       // Set roles dynamically if available
//       if (Array.isArray(data.role)) {
//         setRoles(data.role);
//       } else {
//         console.error("Roles data is not in array format:", data.role);
//       }

//       // Set privileges dynamically if available
//       if (Array.isArray(data.privileges)) {
//         setPrivileges(data.privileges);

//         // Generate checkboxes only for available privileges
//         const doPageAccessObj = {};
//         data.privileges.forEach((privilege) => {
//           if (privilege.includes("digitalocean")) {
//             doPageAccessObj[privilege] = false; // Create checkbox only if privilege exists
//           }
//         });
//         setDoPageAccess(doPageAccessObj);
//         // Generate checkboxes only for available privileges
//         const AwsPageAccessObj = {};
//         data.privileges.forEach((privilege) => {
//           if (privilege.includes("AWS")) {
//             AwsPageAccessObj[privilege] = false; // Create checkbox only if privilege exists
//           }
//         });
//         setAwsPageAccess(AwsPageAccessObj);
//       } else {
//         console.error("Privileges data is not in array format:", data.privileges);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchdata();
//   }, []);

//   const handleSubmit = () => {
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
    
//   const registrationData = {
//     username,               // Send username
//     password,               // Send password
//     role: [accessRole],     // Send the selected role as an array (assuming it's a single role)
//     privileges: Object.keys(doPageAccess).filter(privilege => doPageAccess[privilege]),
//     privileges: Object.keys(AwsPageAccess).filter(privilege => AwsPageAccess[privilege]), // Send only selected privileges for DigitalOcean
//     email: mailId,          // Send email
//   };

//   // Log the data for debugging purposes
//   console.log("Registration Data:", registrationData);
//     handleRegister({ employeeId, username, mailId, password, accessRole, doPageAccess, AwsPageAccess });
//   };
  

//   const togglePasswordVisibility = () => {
//     setShowPasswordFields(!showPasswordFields);
//   };

//   const handleDoPageAccessChange = (e) => {
//     setDoPageAccess({ ...doPageAccess, [e.target.name]: e.target.checked });
//   };

//   const handleAwsPageAccessChange = (e) => {
//     setAwsPageAccess({ ...AwsPageAccess, [e.target.name]: e.target.checked });
//   };

//   return (
//     <div className="register-container">
//       <div className="register-card">
//         <div className="card-body">
//           <h2>Register</h2>
//           <div className="form-group">
//             <input type="text" className="form-control" placeholder="Employee ID" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
//           </div>
//           <div className="form-group">
//             <input type="text" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//           </div>
//           <div className="form-group">
//             <input type="email" className="form-control" placeholder="Mail ID" value={mailId} onChange={(e) => setMailId(e.target.value)} />
//           </div>

//           {/* Password Fields */}
//           <div className="form-group password-container">
//             <input type={showPasswordFields ? "text" : "password"} className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             <div className="password-toggle-container">
//               <img src={showpassword} alt="Show Password" className={`password-toggle-icon ${showPasswordFields ? "hidden" : ""}`} onClick={togglePasswordVisibility} />
//               <img src={hidepassword} alt="Hide Password" className={`password-toggle-icon ${!showPasswordFields ? "hidden" : ""}`} onClick={togglePasswordVisibility} />
//             </div>
//           </div>

//           <div className="form-group password-container">
//             <input type={showPasswordFields ? "text" : "password"} className="form-control" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//           </div>

//           {/* Access Role Selection */}
//           <div className="form-group access-role">
//             <label className="access-role-label">Access Role:</label>
//             <div className="radio-group">
//               {roles.length > 0 ? (
//                 roles.map((role, index) => (
//                   <label key={index}>
//                     <input type="radio" name="accessRole" value={role} checked={accessRole === role} onChange={(e) => setAccessRole(e.target.value)} />
//                     {role.charAt(0).toUpperCase() + role.slice(1)}
//                   </label>
//                 ))
//               ) : (
//                 <p>No roles available</p>
//               )}
//             </div>
//           </div>

//           {/* Render DigitalOcean Access Section only if "custom" role is selected */}
//           {accessRole === "custom" && Object.keys(doPageAccess).length > 0 && (
//             <div className="do-page">
//               <h3>DigitalOcean Access</h3>
//               <div className="page-access">
//                 <label>Select Pages Accessible for DigitalOcean:</label>
//                 <div className="checkbox-group">
//                   {Object.keys(doPageAccess).map((privilege, index) => (
//                     <label key={index}>
//                       <input type="checkbox" name={privilege} checked={doPageAccess[privilege]} onChange={handleDoPageAccessChange} />
//                       {privilege.split('_').join(' ')} {/* Convert privilege to readable format */}
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {accessRole === "custom" && Object.keys(AwsPageAccess).length > 0 && (
//             <div className="do-page">
//               <h3>DigitalOcean Access</h3>
//               <div className="page-access">
//                 <label>Select Pages Accessible for DigitalOcean:</label>
//                 <div className="checkbox-group">
//                   {Object.keys(AwsPageAccess).map((privilege, index) => (
//                     <label key={index}>
//                       <input type="checkbox" name={privilege} checked={AwsPageAccess[privilege]} onChange={handleAwsPageAccessChange} />
//                       {privilege.split('_').join(' ')} {/* Convert privilege to readable format */}
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           <div>
//             <button onClick={handleSubmit} className="register-btn">Register</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;

import React, { useState, useEffect } from "react";
import '../static/css/register.css';
import showpassword from '../static/media/sleep-unscreen.gif';
import hidepassword from '../static/media/view-unscreen.gif';
import axios from "axios";
import Cookies from "js-cookie";

function Register({ handleRegister, username, password, setUsername, setPassword }) {
  const [employeeId, setEmployeeId] = useState("");
  const token = Cookies.get("access_token");
  const [mailId, setMailId] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accessRole, setAccessRole] = useState("");
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [doPageAccess, setDoPageAccess] = useState({});
  const [awsPageAccess, setAwsPageAccess] = useState({});
  const [roles, setRoles] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await axios.get("http://192.168.1.39:8000/get_user_roles_priviliges", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data.data[0];

      if (Array.isArray(data.role)) {
        setRoles(data.role);
      } else {
        console.error("Roles data is not in array format:", data.role);
      }

      if (Array.isArray(data.do_privileges)) {
        const doAccessObj = {};
        data.do_privileges.forEach((privilege) => {
          doAccessObj[privilege] = false;
        });
        setDoPageAccess(doAccessObj);
      } else {
        console.error("DigitalOcean privileges data is not in array format:", data.do_privileges);
      }

      if (Array.isArray(data.aws_privileges)) {
        const awsAccessObj = {};
        data.aws_privileges.forEach((privilege) => {
          awsAccessObj[privilege] = false;
        });
        setAwsPageAccess(awsAccessObj);
      } else {
        console.error("AWS privileges data is not in array format:", data.aws_privileges);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    const registrationData = {
      username,
      password,
      role: [accessRole],
      privileges: {
        do_privileges: Object.keys(doPageAccess).filter(privilege => doPageAccess[privilege]),
        aws_privileges: Object.keys(awsPageAccess).filter(privilege => awsPageAccess[privilege])
      },
      email: mailId,
    };

    console.log("Registration Data:", registrationData);
    handleRegister({ employeeId, username, mailId, password, accessRole, doPageAccess, awsPageAccess });
  };

  const togglePasswordVisibility = () => {
    setShowPasswordFields(!showPasswordFields);
  };

  const handlePageAccessChange = (e, setAccess) => {
    setAccess(prev => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="card-body">
          <h2>Register</h2>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Employee ID" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Mail ID" value={mailId} onChange={(e) => setMailId(e.target.value)} />
          </div>

          <div className="form-group password-container">
            <input type={showPasswordFields ? "text" : "password"} className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="password-toggle-container">
              <img src={showpassword} alt="Show Password" className={`password-toggle-icon ${showPasswordFields ? "hidden" : ""}`} onClick={togglePasswordVisibility} />
              <img src={hidepassword} alt="Hide Password" className={`password-toggle-icon ${!showPasswordFields ? "hidden" : ""}`} onClick={togglePasswordVisibility} />
            </div>
          </div>
          <div className="form-group password-container">
            <input type={showPasswordFields ? "text" : "password"} className="form-control" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>

          <div className="form-group access-role">
            <label className="access-role-label">Access Role:</label>
            <div className="radio-group">
              {roles.length > 0 ? (
                roles.map((role, index) => (
                  <label key={index}>
                    <input type="radio" name="accessRole" value={role} checked={accessRole === role} onChange={(e) => setAccessRole(e.target.value)} />
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </label>
                ))
              ) : (
                <p>No roles available</p>
              )}
            </div>
          </div>

          {accessRole === "custom" && (
            <>
              <div className="do-page">
                <h3>DigitalOcean Access</h3>
                <div className="checkbox-group">
                  {Object.keys(doPageAccess).map((privilege, index) => (
                    <label key={index}>
                      <input type="checkbox" name={privilege} checked={doPageAccess[privilege]} onChange={(e) => handlePageAccessChange(e, setDoPageAccess)} />
                      {privilege.split('_').join(' ')}
                    </label>
                  ))}
                </div>
              </div>

              <div className="aws-page">
                <h3>AWS Access</h3>
                <div className="checkbox-group">
                  {Object.keys(awsPageAccess).map((privilege, index) => (
                    <label key={index}>
                      <input type="checkbox" name={privilege} checked={awsPageAccess[privilege]} onChange={(e) => handlePageAccessChange(e, setAwsPageAccess)} />
                      {privilege.split('_').join(' ')}
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          <button onClick={handleSubmit} className="register-btn">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Register;