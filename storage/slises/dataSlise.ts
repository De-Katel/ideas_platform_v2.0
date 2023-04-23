import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    token: null
};

export const fetchUserLogin = createAsyncThunk(
    'user/fetchUserLogin',
    async ([password, email]: string[]) => {

        const response = await fetch('http://localhost:8000/api/v1/auth/token/login/', {
            method: 'POST',
            body: JSON.stringify({
                "password": password,
                "email": email,
            }),
            headers: { "content-type": "application/json" }
        })
            .then((res) => {
                return res.json()
            })
        return response;
    }
);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        logOut: (state) => {
            state.token = null

        }

    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchUserLogin.pending, (state) => {
                console.log('start');

            })
            .addCase(fetchUserLogin.rejected, () => {
                console.log('Error')
            })
            .addCase(fetchUserLogin.fulfilled, (state, action) => {
                if (!('auth_token' in action.payload)) return

                state.token = action.payload.auth_token;
            })
            .addCase(HYDRATE, (state, action) => {
                console.log('HYDRATE', state, action);
                return {
                    ...state,
                };
            })
    }
})



export const { logOut } = dataSlice.actions;

export default dataSlice.reducer
