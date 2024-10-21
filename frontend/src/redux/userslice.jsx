import { createSlice } from "@reduxjs/toolkit";
const userslice = createSlice({
  name: "user",
  initialState: {
    user: null, // Can be null or {}
  },
  reducers: {
    setUser: (state, action) => {
      console.log("Redux action payload:", action.payload); // Log the payload
      state.user = action.payload; // Update state with user details
    },
  },
});

export const { setUser } = userslice.actions;
export default userslice.reducer;
