import React, { useState } from 'react';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
import '../static/css/AWSlaunch.css';


function AWSlaunch({user}) {
    const navigate = useNavigate();
    const temp = 'http://192.168.1.109:5000/aws';

    const handleNavigation = (url) => {
        const data = `${temp}${url}`;
        navigate(url, { state: { data } });
    };

    return (
        <div className="dolaunch-container">
            <section className="buttons-container">
                {[
                    { label: 'Create Instance', url: '/createinstance' },
                    { label: 'Terminate Instance', url: '/terminate-instance' },
                    { label: 'Insert Ips', url: '/insert-ips' },
                    { label: 'List Instance', url: '/instancelist' },
                    { label: 'Create Prefix', url: '/Awscreateprefix' },
                    { label: 'List Prefix', url: '/prefixlist' },
                    { label: 'List Subnet', url: '/subnetlist' },
                    { label: 'List Security Group', url: '/SGlist' },
                    { label: 'List AMI', url: '/amilist' },
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
