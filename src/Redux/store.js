import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import userReducer from "./userSlice";


export default configureStore({
    reducer:{
        users:usersReducer,
        user:userReducer
    }
})