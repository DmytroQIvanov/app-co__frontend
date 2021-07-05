import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { address } from "../config";

export const getUsers = createAsyncThunk('users/getUsers',async (page=1,limit=20)=>{
    return fetch(`${address}/users?page=${page}&limit=20`).then((res)=>res.json())
})

export const getUsersLength = createAsyncThunk('users/getUsersLength',async ()=>{
    return fetch(`${address}/users-length`).then((res)=>res.json())
})

const usersSlice = createSlice({
    name:'users',
    initialState: {
        store:{
            users:[],
            numberOfUsers:20
        },
        status:null,
    },
    extraReducers:{
        [getUsers.pending]:(state,action)=>{
            state.status = 'loading'
        },
        [getUsers.fulfilled]:(state,{payload})=>{
            state.store.users = payload;
            state.status ='success'
        },
        [getUsers.rejected]:(state,action)=>{
            state.status ='failed'
        },


        //
        [getUsersLength.fulfilled]:(state,{payload})=>{
            state.store.numberOfUsers = payload.usersLength;
            state.status ='success'
        },
    }
})

export default usersSlice.reducer