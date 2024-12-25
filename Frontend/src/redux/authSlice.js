// To create different category of a user related to job
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    // To show loading
    loading: false,
    // to show user status
    user: null,
  },
  reducers: {
    //There are actions
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    // When user is logged in
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setLoading, setUser } = authSlice.actions;
export default authSlice.reducer;
