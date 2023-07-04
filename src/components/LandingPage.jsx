import React from "react";
import {useNavigate} from 'react-router-dom'
import "../styles/LandingPage.css";
export default function LandingPage() {
  const navigate = useNavigate();
  const handlePlay = () => {
    navigate('/play');
  };
  const handleRule = () => {
    navigate('/rule');
  }
    
  return (
    <>
      <div className="container">
        <div className="main">
          
            <h1 className="heading">Welcome to Number Guessing Game</h1>
          
          <h3>Updates coming soon...
          </h3>
          
          <div className="buttonwrapper">
          <button className="btn btn-easy" onClick={handlePlay}>Play</button>
            <button className="btn btn-hard" onClick={handleRule}>How to play?</button>
          </div>
          <footer className="footer">
            <p>Made by Anirban Nath | &copy;All copyrights reserverd</p>
          </footer>
        </div>
      </div>
    </>
  );
}
