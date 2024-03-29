import { createSlice } from '@reduxjs/toolkit';

/**
 * selectedChatDetails value format
 * {
 *  receiverId: ,
 *  receiverName: ,
 *  typing: { TODO: later
 *      userId : // id of the user who's typing;
 *      typing: boolean; true /  false
 *  },
 * }
 *
 */
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
            state.messages = Array.isArray(action.payload)? action.payload : [action.payload];
        },
        setTyping: (state, action) => {
            state.selectedChatDetails = action.payload;
        },
    }
});

export const { setSelectedChatDetails, setMessages, setTyping } = chatSlice.actions

export default chatSlice.reducer;
