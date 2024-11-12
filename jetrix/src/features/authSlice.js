import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import {login as apiLogin, logout as apiLogout } from '../services/authService';

// permisos temporales
const users = [
    {username: 'user1', password: 'pass1'}
];


const initialState = {
    isAuthenticated: false,
    user: null,
    error:null,
};

//Funcionalidad axios
export const functionLogin= createAsyncThunk('auth/login', async({username, password}, {isRejectedWithValue}) =>{
    try{
        const data = await apiLogin(username, password);
        return data;
    }catch(error){
        return isRejectedWithValue(error.response.data);
    }
});


export const functionLogout = createAsyncThunk('auth/logout', async ()=>{
    apiLogout();
});

const authSlice = createSlice({
    name:'auth',
    initialState: {
        isAuthenticated: false,
        user: null,
        accessToken: localStorage.getItem('access_token') || null,
        error: null,
    },
    reducers: {},
    extraReducers:(builder) => {
        builder
        .addCase(functionLogin.fulfilled, (state, action) => {
            state.isAuthenticated = true;
            state.accessToken = action.payload.access;
            state.error= null;
        })
        .addCase(functionLogin.rejected, (state, action) =>{
            state.isAuthenticated = false;
            state.error = action.payload?.detail || 'login failed';
        })
        .addCase(functionLogout.fulfilled, (state)=>{
            state.isAuthenticated = false;
            state.accessToken = null;
            state.user = null;
            state.error = null;
        });
    },
});


// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         login: (state, action) =>  {
//             const { username, password} = action.payload;
//             const user = users.find(
//               (user) => user.username === username && user.password === password  
//             );
            
//             if(user){
//                 state.isAuthenticated = true;
//                 state.user = {username: user.username};
//                 state.error = null;
               
//             }else{
//                 state.isAuthenticated = false;
//                 state.user = null;
//                 state.error = 'usuario o contrase;a incorrectos';
//             }
//         },
//         logout: (state) =>{
//             state.isAuthenticated = false;
//             state.user = null;
//             state.error = null;
//         },
//     },
// });

// export const { login, logout } = authSlice.actions;



export default authSlice.reducer;