import React from 'react';
import '../static/css/loading.css';

function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
