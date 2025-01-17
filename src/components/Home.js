
// import React from 'react';
// import '../static/css/home.css';
// import backgroundVideo from '../static/media/background_video.mp4';
// function Home() {
//   return (
//     <div>
//       <div className="video-background">
//         <video autoPlay muted loop>
//         <source src={backgroundVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       <main>
//         <h2>Home Page</h2>
//         <p>Welcome to the home page!</p>
//         <div className="animated-buttons">
//           <button>Learn More</button>
//           <button>Contact Us</button>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Home;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure React Router is set up
import '../static/css/home.css';
import mainBackgroundVideo from '../static/media/main-back2.mp4';
import doBackgroundVideo from '../static/media/DO1.mp4';
import awsBackgroundVideo from '../static/media/videoplayback.mp4';
import Loading from './Loading'; // Import the Loading component

function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleNavigation = (path) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate(path);  // Navigate to the target page after loading
    }, 3000);  // Adjust loading time (3 seconds in this case)
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
              <button onClick={() => handleNavigation('/aws-launch')}>AWS Machine Launch</button>
            </div>
          </div>
        </div>

        {/* Loading Animation */}
        {loading && <Loading />}
      </main>
    </div>
  );
}

export default Home;
