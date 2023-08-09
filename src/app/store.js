import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Reducers/userReducer";



export const server = "http://localhost:4002/api/v1";
const store = configureStore({
    reducer: {
        user: userReducer,
    }
})

export default store;


