import { createSlice } from '@reduxjs/toolkit'
import {getUserData} from "../utility/utils";


export const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    userData: getUserData()
  },
  reducers: {
    handleLogin: (state, action) => {
      state.userData = action.payload;
      state.accessToken = action.payload.accessToken
      // state.refreshToken = action.payload.refreshToken

      localStorage.setItem('userData', JSON.stringify(state.userData))
      localStorage.setItem('accessToken', action.payload.accessToken)
      // localStorage.setItem('refreshToken, JSON.stringify(action.payload.refreshToken))
    },
  }
})

export const { handleLogin } = authSlice.actions

export default authSlice.reducer;
