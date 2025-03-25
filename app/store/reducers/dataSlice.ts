import { createSlice } from "@reduxjs/toolkit";

interface Data {
  value: string;
}

const initialState: Data = {
  value: "cases",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
