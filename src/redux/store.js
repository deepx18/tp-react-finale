import { configureStore } from "@reduxjs/toolkit";
import condidatureReducer from "./condidatureSlice"

const store = configureStore({
  reducer: {
    condidature: condidatureReducer
  }
})

export default store