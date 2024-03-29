import { createSlice } from '@reduxjs/toolkit';
import { getCookie, setCookie } from "../utility/cookies";


export const userSlice = createSlice({
    name: 'friends',
    initialState: {
        friends: getCookie('friends'),
        selectedFriend: {},
        onlineUsers: []
    },
    reducers: {
        setFriendsList: (state, action) => {
            state.friends = action.payload;
            setCookie('friends', action.payload);
        },
        setChatFriend: (state, action) => {
            state.selectedFriend = action.payload;
        },
        setOnlineUsers: (state, action) => {
            state.onlineUsers = action.payload
        }
    }
});

export const { setFriendsList, setChatFriend, setOnlineUsers } = userSlice.actions

export default userSlice.reducer;
