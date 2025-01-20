import React, { useState } from 'react';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
import '../static/css/Dolaunch.css';

function Dolaunch() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (url) => {
        setLoading(true);
        navigate(url);
        setLoading(false);
    };

    return (
        <div className="dolaunch-container">
            {loading && <Loading />}
            <section className="buttons-container">
                {[
                    { label: 'Create Instance', url: '/Docreateinstance' },
                    { label: 'Terminate Instance', url: '/terminate-instance' },
                    { label: 'dc-to-DigitalOcean', url: '/dc-to-digitalocean' },
                    { label: 'Insert Ips', url: '/insert-ips' },
                    { label: 'List Instance', url: '/instancelist' },
                ].map(({ label, url }) => (
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
