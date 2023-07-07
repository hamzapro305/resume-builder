import { configureStore } from "@reduxjs/toolkit";
import { ResumeReducer } from "./Slices/ResumeSlice";

export const store = configureStore({
    reducer: {
        Resume: ResumeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;