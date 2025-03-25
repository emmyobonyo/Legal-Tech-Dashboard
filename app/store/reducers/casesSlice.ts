import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Case } from "@/app/types/case";
import { fetchMockCases } from "@/app/lib/apis/hooks/requests";

interface CaseState {
  cases: Case[];
  loading: boolean;
  error: string | null;
}

const initialState: CaseState = {
  cases: [],
  loading: false,
  error: null,
};

export const fetchCases = createAsyncThunk<
  Case[],
  void,
  { rejectValue: string }
>("cases/fetchCases", async (_, { rejectWithValue }) => {
  try {
    const response = await fetchMockCases();
    return response;
  } catch (error) {
    console.log(error);
    return rejectWithValue("Failed to fetch cases");
  }
});

const casesSlice = createSlice({
  name: "cases",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCases.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCases.fulfilled, (state, action: PayloadAction<Case[]>) => {
        state.loading = false;
        state.cases = action.payload;
        state.error = null;
      })
      .addCase(fetchCases.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default casesSlice.reducer;
