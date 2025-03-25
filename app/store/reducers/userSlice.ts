import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "@/app/types/user";

const initialState: UserState = {
  id: null,
  name: "",
  email: "",
  role: "",
  billableHours: 0,
  loggedIn: false,
  profile_picture: "",
  rank: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.billableHours = action.payload.billableHours;
      state.loggedIn = action.payload.loggedIn;
      state.profile_picture = action.payload.profile_picture;
      state.rank = action.payload.rank;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
