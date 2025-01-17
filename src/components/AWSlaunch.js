import React, { useState } from 'react';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
import '../static/css/AWSlaunch.css';

function AWSlaunch() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const data = [
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
        // Add more instances as necessary...
    ];

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
