import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectslice";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});
