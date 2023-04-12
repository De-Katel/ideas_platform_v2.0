import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    isModal: true,
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
        setIsModal: (state) => {
            state.isModal = !state.isModal;
        },

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
                // state.id = action.payload.id;
            })
        // .addCase(fetchUserData.rejected, (state) => {
        //     state.errorMessege = 'Такой пользователь не найден'
        //     state.isError = true;
        //     // state.token = null;
        // })
        // .addCase(fetchUserData.fulfilled, (state, action) => {
        //     state.user = action.payload;
        // })

    },

});

export const { setIsModal, logOut } = dataSlice.actions;

export default dataSlice.reducer
