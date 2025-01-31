import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
import '../static/css/Dolaunch.css';
import Cookies from "js-cookie";
import axios from "axios";

function Dolaunch({ user }) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const token = Cookies.get("access_token");
    const [privileges, setPrivileges] = useState([]);
    
    // Use useEffect to fetch data when the component mounts or when user.role changes
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await axios.get("http://192.168.1.39:8000/get_user_roles_priviliges", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setPrivileges(response.data.data[0]['do_privileges']);
            } catch (error) {
                console.log("Error while fetching");
            }
        };

        if (user.role === 'admin') {
            fetchdata();
        } else {
            setPrivileges(user.privileges.doPageAccess);
        }
    }, [user.role, token]); // Re-run the effect only if user.role or token changes

    const handleNavigation = (url) => {
        setLoading(true);
        navigate(url);
        setLoading(false);
    };

    // Build the buttons based on privileges
    const buttons = privileges.map(privilege => ({
        label: privilege,
        url: `/${privilege}`
    }));

    return (
        <div className="dolaunch-container">
            {loading && <Loading />}
            <section className="buttons-container">
                {buttons.map(({ label, url }) => (
                    <button
                        key={label}
                        aria-label={label}
                        onClick={() => handleNavigation(url)}
                    >
                        <div className="left"></div>
                        {label}
                        <div className="right"></div>
                    </button>
                ))}
            </section>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/kamildyrek"
                aria-label="Visit author's Twitter"
            >
                <svg
                    className="social-icon"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="#fff"
                        d="M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92..."
                    />
                </svg>
            </a>
        </div>
    );
}

export default Dolaunch;
