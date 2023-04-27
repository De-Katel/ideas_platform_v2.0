import { AnyAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface InitialDataState {
    token: string | null
}

const initialState: InitialDataState = {
    token: null
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        logOut: (state) => {
            state.token = null
        }

    },

    extraReducers:
        (builder) => {
            builder
                .addCase(HYDRATE, (state, { payload }: AnyAction) => {
                    return {
                        ...state
                        ,
                        ...payload.data
                    };
                })
        }
})



export const { logOut } = dataSlice.actions;

export default dataSlice
