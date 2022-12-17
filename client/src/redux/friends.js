import { createSlice } from '@reduxjs/toolkit'
import { getCookie, setCookie } from "../utility/cookies";


export const userSlice = createSlice({
    name: 'friends',
    initialState: {
        friends: getCookie('friends'),
    },
    reducers: {
        setFriendsList: (state, action) => {
            console.log('paykiad: ', action.payload);
            state.friends = action.payload;
            setCookie('friends', action.payload);
        },
    }
});

export const { setFriendsList } = userSlice.actions

export default userSlice.reducer;
