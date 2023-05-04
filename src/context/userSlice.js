import {
    createSlice
} from '@reduxjs/toolkit';

const initialState = {
    user: {},
    isAuthenticated: false
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccess:(state, {
            payload
        }) => {
            state.isAuthenticated = true;
            state.user = payload;
        },
        loginFail: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = {};
            // storage.removeItem('token');
        },
    },
});

export const {
    loginSuccess,
    loginFail,
    logout
} = userSlice.actions;

export default userSlice.reducer;