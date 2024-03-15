import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.createUser = action.payload;
    },
    SignInFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    }
  },
});

export const {signInStart, signInSuccess, SignInFailure} = userSlice.actions;
export default userSlice.reducer;
