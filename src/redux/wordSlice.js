//Main slice of state and reducer.

import { createSlice } from "@reduxjs/toolkit";
import wordList from "../wordList";

// wordSlice - is the name of the slice of state configured in store.
export const wordSlice = createSlice({
  name: "word",
 
  initialState: {
    newWord: "",
    count: 0,
    result: "",
  },
 
  reducers: {
    // Get a random new word from the word list as start button is pressesd.
    getWord: (state) => {
      let newWord = wordList[Math.floor(Math.random() * wordList.length)];
      newWord = newWord.trim().toUpperCase(); // consistent case, removing no spaces
      state.newWord = newWord;
    },

    // increase counter by 1 for every wrong guess
    increaseCount: (state) => {
      state.count += 1;
    },

    // initialise count as needed for reset
    startCount: (state) => {
      state.count = 0;    
    },

    // set result message via a switch for win, loss or reset.
    setResult: (state, action) => {
      switch (action.payload) {
        case 0:
          state.result = `Oh no! The word was ${state.newWord}.`;
          break;
        case 1:
          state.result = `Well Done! ${state.newWord} is correct.`;
          break;
        default:
          state.result = "";
          break;
      }
    },
  },
});

// Exporting actions from the reducer for body component
export const { getWord, increaseCount, startCount, setResult } =
  wordSlice.actions;

// Exporting the reducer function for the 'store'.
export default wordSlice.reducer;
