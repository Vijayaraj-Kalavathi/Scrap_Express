import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    auth : true
}


const authReducerSlice = createSlice({
    name:"Auth",
    initialState,
    reducers:{
    setAuth :(state,action) =>{
        state.data = action.payload
    },
    setInitailsState:(state) =>initialState
    }
})

export const  {setInitailsState,setAuth} = authReducerSlice.actions
export const SelectAuth = (state) =>state.Auth.auth
export default  authReducerSlice.reducer;