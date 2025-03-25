import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "@/app/types/user";

const initialState: UserState = {
  id: null,
  name: "",
  email: "",
  role: "",
  billableHours: 0,
  loggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actionm) => {
      state.id = actionm.payload.id;
      state.name = actionm.payload.name;
      state.email = actionm.payload.email;
      state.role = actionm.payload.role;
      state.billableHours = actionm.payload.billableHours;
      state.loggedIn = actionm.payload.loggedIn;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
