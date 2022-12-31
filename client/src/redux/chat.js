import { createSlice } from '@reduxjs/toolkit';


export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        selectedChatDetails: null,
        selectedFriend: {},
        messages: []
    },
    reducers: {
        setSelectedChatDetails: (state, action) => {
            state.selectedChatDetails = action.payload;
        },
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
    }
});

export const { setSelectedChatDetails, setMessages } = chatSlice.actions

export default chatSlice.reducer;
