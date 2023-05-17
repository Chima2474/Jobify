import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Features/User/userSlice";
import JobSlice from "./Features/Job/JobSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: JobSlice,
  },
});
