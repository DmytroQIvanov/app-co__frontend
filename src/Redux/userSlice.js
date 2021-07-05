import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { address } from "../config";

export const getUser = createAsyncThunk('user/getUser',async (id=9,)=>{
    return fetch(`${address}/user/${id}`).then((res)=>res.json())
})

export const getUserData = createAsyncThunk('user/getUserData',async (data)=>{
const result = data.jsonStartDate   
if(data.jsonStartDate && data.jsonEndDate){
return fetch(`${address}/user-data/${data.id}?startDate=${result}&endDate=${data.jsonEndDate}`).then((res)=>res.json())
}else{
return fetch(`${address}/user-data/${data.id}`).then((res)=>res.json())

}
})


const userSlice = createSlice({
    name:'user',
    initialState: {
        store:{
            user:{},
            userStatistics:{}
        },
        status:null,
    },
    extraReducers:{
        [getUser.pending]:(state,action)=>{
            state.status = 'loading'
        },
        [getUser.fulfilled]:(state,{payload})=>{
            state.store.user = payload;
            // state.status ='success'
        },
        [getUser.rejected]:(state,action)=>{
            // state.status ='failed'
        },

        [getUserData.pending]:(state,action)=>{
            state.status = 'loading'
        },
        [getUserData.fulfilled]:(state,{payload})=>{
            console.log('success')
            state.store.userStatistics = payload.user;
            state.status ='success'
        },
        [getUserData.rejected]:(state,action)=>{
            state.status ='failed'
        },
    }
})

export default userSlice.reducer