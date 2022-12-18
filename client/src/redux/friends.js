import { createSlice } from '@reduxjs/toolkit'
import { getCookie, setCookie } from "../utility/cookies";


export const userSlice = createSlice({
    name: 'friends',
    initialState: {
        friends: getCookie('friends'),
        selectedFriend: {}
    },
    reducers: {
        setFriendsList: (state, action) => {
            state.friends = action.payload;
            setCookie('friends', action.payload);
        },
        selectFriend: (state, action) => {
            state.selectedFriend = action.payload;
        },
    }
});

export const { setFriendsList, selectFriend } = userSlice.actions

export default userSlice.reducer;
