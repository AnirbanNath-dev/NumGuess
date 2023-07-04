import React, { useState, useEffect } from 'react';
import '../styles/Modes.css';
import '../styles/Box.css';
import { useNavigate } from 'react-router-dom';

function Box(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isClickable, setIsClickable] = useState(true);

  useEffect(() => {
    setIsClickable(props.isFlippable);
    setIsFlipped(props.isFlipped);
  }, [props.isFlippable, props.isFlipped]);

  const handleCardClick = () => {
    if (isClickable) {
      setIsFlipped(true);
      setIsClickable(false);
      props.onClick(props.guess);
    }
  };

  return (
    <div className="card" onClick={isClickable ? handleCardClick : null}>
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <h2>{props.choose}</h2>
        </div>
        <div className="card-back">
          {isFlipped && <h2>{props.guess}</h2>}
        </div>
      </div>
    </div>
  );
}

export default function Play() {
  const [chances, setChances] = useState(3);
  const [gameEnded, setGameEnded] = useState(false);
  const [computerGuess, setComputerGuess] = useState(null);
  const [nums, setNums] = useState([]);
  const [isFlippable, setIsFlippable] = useState(true);

  const navigate = useNavigate();
  const handlePlayAgain = () => {
    navigate('/');
  };

  useEffect(() => {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const getRandomNumber = () => {
      const index = Math.floor(Math.random() * arr.length);
      const number = arr[index];
      arr.splice(index, 1);
      return number;
    };

    const generatedNums = Array.from({ length: 6 }, getRandomNumber);
    const generatedComputerGuess = generatedNums[Math.floor(Math.random() * generatedNums.length)];

    setComputerGuess(generatedComputerGuess);
    setNums(generatedNums);
  }, []);

  const handleCardClick = (guess) => {
    if (!gameEnded) {
      if (guess === computerGuess) {
        setGameEnded(true);
      } else {
        setChances((prevChances) => {
          const newChances = prevChances - 1;
          if (newChances === 0) {
            setGameEnded(true);
          }
          return newChances;
        });
      }
    }
  };

  useEffect(() => {
    setIsFlippable(!gameEnded);
  }, [gameEnded]);

  return (
    <>
      <div className="containermode">
        <div className="mainmode">
          {computerGuess !== null && (
            <h2>The secret number is {computerGuess}</h2>
          )}
          {/* {chances > 0 && <p>Chances remaining: {chances}</p>} */}
          {gameEnded ? (
            <button className="btn playagain" onClick={handlePlayAgain}>Play Again</button>
          ) : (
            <p>Chances remaining: {chances}</p>
          )}

          {gameEnded && (
            <p>
              {computerGuess === computerGuess && chances > 0 ? 'Congratulations! You won!' : 'Game Over. Try again!'}
            </p>
          )}

          <div className="boxes">
            {nums.map((guess, index) => (
              <Box key={index} guess={guess} onClick={handleCardClick} isFlipped={gameEnded} isFlippable={isFlippable} />
            ))}
          </div>
          <p>Made by Anirban Nath | &copy;All copyrights reserverd</p>
        </div>
      </div>
    </>
  );
}

