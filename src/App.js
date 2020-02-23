import React from 'react';
import logo from './logo.png';
import './App.css';
import './components/YouTube.js'
import YouTube from './components/YouTube.js';
import youtubelogo from './youtube.png';
import instagramlogo from './instagram.png';
import facebooklogo from './facebook.png';

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App-title">INFY TECH</h2>
      </header>
      <main>
        <div className="App-body">
        <p>
        INFY TECH is a YouTube channel which delivers
         technical stuff like programming, 
        tech news, developer news, tech facts, mobile tech
         and all the interesting technology trends.
        </p>
            <YouTube/>
        </div> 
      </main>
      <footer className="footer">
      <div className="footer-copyright">
        <div className="footer-text">
        Copyright © INFY TECH 2020
        <a className="social-info" href="https://www.instagram.com/infytech2019/"><img className="social-icon" src={instagramlogo} alt = "Instagram"/></a>
        <a className="social-info" href="https://www.facebook.com/INFY-TECH-122388739157109/"><img className="social-icon" src={facebooklogo} alt = "Facebook"/></a>
        <a className="social-info" href="https://www.youtube.com/channel/UCuxkk3TD7cfPR08JEWVyXZA"><img className="social-icon" src={youtubelogo} alt = "Subscribe"/></a>
        </div>
      </div>
    </footer>
      
    </div>
  );
}

export default App;
