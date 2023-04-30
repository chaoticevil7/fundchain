import React from 'react';
import VideoBackground from './components/VideoBackground';
import './style.css';

function App() {
  return (
    <div className="App">
      <VideoBackground />
      <div className="content">
        <div className="animation">
          <div className="intro">
            <h1>FUND</h1>
            <h2>CHAIN</h2>
            <video src="ball.mp4"></video>
          </div> 
        </div>
        <div className="rectangle">
          <div className="connect-wallet">CONNECT WALLET</div>
        </div>
        <div className="success">
          SUCCESS TRANSPARENTLY
        </div>
        <section>
          <h1>MYBALL</h1>
        </section>
        <div className="new-element">
          FUNDCHAIN AIMS TO BE DECENTRALIZED CROWDFUNDING PLATFORM BASED ON SMART CONTRACTS, NO CENTRAL AUTHORITY.
        </div>
        <div className="support-transparently">
          <p>SUPPORT TRANSPARENTLY</p>
        </div>  
      </div>
    </div>
  );
}

export default App;
