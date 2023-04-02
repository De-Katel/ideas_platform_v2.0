import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isModal: true

};




export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setIsModal: (state) => {
            state.isModal = !state.isModal;
        },

    },

});

export const { setIsModal } = dataSlice.actions;

export default dataSlice.reducer
