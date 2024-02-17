import { createSlice } from "@reduxjs/toolkit";
const appSlice=createSlice({
    name:"app",
    initialState:{
        open:true,
        videos:[],
        category:"All",
        searchSuggestion:[]
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.open=!state.open;
        },
        setHomeVideo:(state,action)=>{
            state.videos=action.payload
        },
        setCategory:(state,action)=>{
            state.category=action.payload
        },
        setSearchSuggestion:(state,action)=>{
                state.searchSuggestion=action.payload
        }
    }
})
export default appSlice.reducer;
export const {toggleSidebar,setHomeVideo,setCategory,setSearchSuggestion}=appSlice.actions;
