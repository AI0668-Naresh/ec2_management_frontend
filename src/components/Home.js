import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure React Router is set up
import '../static/css/home.css';
import mainBackgroundVideo from '../static/media/main-back2.mp4';
import doBackgroundVideo from '../static/media/DO1.mp4';
import awsBackgroundVideo from '../static/media/videoplayback.mp4';

function Home({user}) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
      navigate(path); 
  };

  return (
    <div>
      {/* Main Background */}
      <div className="video-background">
        <video autoPlay muted loop>
          <source src={mainBackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <main>
        <h2>Machine Launch UI</h2>
        <p>Welcome to the Machine Launch UI!</p>

        {/* Two Sections Side by Side */}
        <div className="machine-sections">
          {/* DO Machine Section */}
          <div className="machine-container">
            <div className="video-container">
              <video autoPlay muted loop>
                <source src={doBackgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="content-container">
              <h3>DO Machine Launch</h3>
              <p>launch and manage your DigitalOcean droplets.</p>
              <button onClick={() => handleNavigation('/Dolaunch')}>DO Machine Launch</button>
            </div>
          </div>

          {/* AWS Machine Section */}
          <div className="machine-container">
            <div className="video-container">
              <video autoPlay muted loop>
                <source src={awsBackgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="content-container">
              <h3>AWS Machine Launch</h3>
              <p>Seamlessly launch your AWS EC2 instances.</p>
              <button onClick={() => handleNavigation('/AWSlaunch')}>AWS Machine Launch</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
