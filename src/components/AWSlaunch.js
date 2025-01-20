import React, { useState } from 'react';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
import '../static/css/AWSlaunch.css';

function AWSlaunch() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const data = 'aws';

    const handleNavigation = (url) => {
        setLoading(true);
        // Pass data to the Table component via navigation state
        if (url === "/instancelist") {
            navigate(url, { state: { data } });
        } else {
            navigate(url);
        }
        setLoading(false);
    };

    return (
        <div className="dolaunch-container">
            {loading && <Loading />}
            <section className="buttons-container">
                {[
                    { label: 'Create Instance', url: '/createinstance' },
                    { label: 'Terminate Instance', url: '/terminate-instance' },
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
        </div>
    );
}

export default AWSlaunch;
