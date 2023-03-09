// Main component receiving user input/events and declaring a result.

import { useSelector, useDispatch } from "react-redux";
// Importing the actions we’ve implemented in wordSlice reducer.
import {
  getWord,
  increaseCount,
  startCount,
  setResult,
} from "../redux/wordSlice";

import { useState } from "react";
import Alphabet from "./Alphabet";
import DisplayMan from "./DisplayMan";
import Results from "./Results";
import Help from "./Help";

const Body = () => {
  // useSelector gets slices of state (from store). It takes a function as an argument.
  const word = useSelector((state) => state.word.newWord);

  //shows result for dev if want shortcut for testing/cheating
  console.log(word);

  // using useState React hook to store responses for correct answer.
  const [correctAns, setCorrectAns] = useState([]);

  // useDispatch function will dispatch all the necessary actions to the reducer to modify the state.
  // Initiating the dispatch variable using the useDispatch function.
  const dispatch = useDispatch();

  //setting up a state react hook to show or hide help. We start with shown as gives intructions to get started.
  const [showHelp, setHelp] = useState(true);

  //setting up const function to toggle boolean state of showHelp on button press below
  const displayHelp = () => {
    setHelp(!showHelp);
  };

  // Start game sets new word and initializes all the variables/state as called by button in return.
  const startGame = () => {
    dispatch(startCount());
    dispatch(getWord());
    setCorrectAns([]);
    dispatch(setResult(""));

    // Re-enable keyboard when start new game
    const alphaArray = document.getElementsByName("alpha-button");
    Array.from(alphaArray).forEach((btn) => {
      btn.disabled = false; //html disable of button
      btn.className = "button"; //change styling back
    });
  };

  // Check if the selected letter is correct
  const checkLetter = (alphabet) => {
    let btn = document.getElementById(alphabet);
    if (word.includes(alphabet)) {
      btn.className = "button-green";
      setCorrectAns([...correctAns, alphabet]); // add to correctAns array
    } else {
      btn.className = "button-pink";
      dispatch(increaseCount()); // increase counter = change image
    }
  };

  // Disable buttons if game concludes to prevent sloppy overrun
  const disableButtons = () => {
    const alphaArray = document.getElementsByName("alpha-button");
    Array.from(alphaArray).forEach((btn) => {
      btn.disabled = true; // a html property
      btn.className = "button-grey"; //css style change
    });
  };

  // Create array of letters using for loop in charcode. Added a hyphen for the word-list and extra novelty!
  let alphabets = [];
  for (let i = 65; i < 91; i++) {
    let char = String.fromCharCode(i);
    alphabets.push(char);
  }
  alphabets.push(String.fromCharCode(45)); //my word-list creates hyphen words so fun to include as beast mode!

  // Hide word with '_' and display letters that are correct answers each time.
  const guessWord = word
    .split("")
    .map((char) => (correctAns.includes(char) ? char : "_"))
    .join(" ");

  // check for winner if no _ left in a valid word
  if (!guessWord.includes("_") && word !== "") {
    dispatch(setResult(1)); // update state with result
    disableButtons(); // call function to disable buttons
  }

  //return section - once there is a word show more components and update states/display as guesses/buttons clicked
  //help has been made optional via a ternary operator
  return (
    <div>
      {word && (
        <div className="state-container">
          <DisplayMan disableButtons={disableButtons} />
          <p className="state-dash">{guessWord}</p>
        </div>
      )}
      {word && (
        <div className="alpha-container">
          {alphabets.map((alphabet, index) => (
            <Alphabet
              key={index}
              alphabet={alphabet}
              checkLetter={checkLetter}
            />
          ))}
        </div>
      )}
      {word && <Results />}
      <button className="btn" onClick={startGame}>
        Start New Game
      </button>
      <br /> <br />
      {showHelp && <Help />}
      <br />
      <button className="btn" onClick={displayHelp}>
        {showHelp ? "Hide Help" : "Help"}
      </button>
    </div>
  );
};

export default Body;
