// Redux toolkit configure store to hold state

import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "./wordSlice";

// adding the wordSlice reducer to the store
export default configureStore({
  reducer: {
    word: wordReducer,
  },
});
