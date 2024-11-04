import { createSlice } from '@reduxjs/toolkit';

const users = [
    {username: 'user1', password: 'pass1'}
];

const initialState = {
    isAuthenticated: false,
    user: null,
    error:null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) =>  {
            const { username, password} = action.payload;
            const user = users.find(
              (user) => user.username === username && user.password === password  
            );
            
            if(user){
                state.isAuthenticated = true;
                state.user = {username: user.username};
                state.error = null;
               
            }else{
                state.isAuthenticated = false;
                state.user = null;
                state.error = 'usuario o contrase;a incorrectos';
            }
        },
        logout: (state) =>{
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;