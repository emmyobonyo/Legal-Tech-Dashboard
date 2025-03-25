import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserState } from "@/app/types/user";
import { fetchMockUsers } from "@/app/lib/apis/hooks/requests";

interface UsersState {
  users: UserState[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk<
  UserState[],
  void,
  { rejectValue: string }
>("users/fetchusers", async (_, { rejectWithValue }) => {
  try {
    const response = await fetchMockUsers();
    return response;
  } catch (error) {
    console.log(error);
    return rejectWithValue("Failed to fecth Users");
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default usersSlice.reducer;
