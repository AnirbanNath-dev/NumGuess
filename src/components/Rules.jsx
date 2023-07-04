import React from 'react'
import GameImage from '../images/game.png'
import '../styles/Modes.css'
import '../styles/Rules.css'
import { useNavigate } from 'react-router-dom'
export default function Rules() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  };
  return (
    <>
    <div className="containermode">
        <div className="mainmode">
          <img src={GameImage} alt="lol" id='gameimage'/>
          <p id='points'>
            <h3>
              1. Click on <u>Play</u> Button
              <br />
              <br />
              2. Then , there will be a secret number shown in the page {`(see in the photo above)`} .
              <br />
              <br />
              3. Select any of 3 cards to guess the correct number hidden behind the cards . 
              <br />
              <br />
              Thanks for playing {`:)`}
              <br />
              <br />
              <button className="btn back" onClick={handleBack}>Back</button>
            </h3>
          </p>
        </div>
    </div>
    </>
  )
}