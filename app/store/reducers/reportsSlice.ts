/* eslint-disable @typescript-eslint/no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMockReports } from "@/app/lib/apis/hooks/requests";
import { ReportType } from "@/app/types/report";

interface ReportsState {
  reports: ReportType[];
  loading: boolean;
  error: string | null;
}

const initialState: ReportsState = {
  reports: [],
  loading: false,
  error: null,
};

export const fetchReports = createAsyncThunk<
  ReportType[],
  void,
  { rejectValue: string }
>("reports/fetchReports", async (_, { rejectWithValue }) => {
  try {
    const response = await fetchMockReports();
    return response;
  } catch (error) {
    console.log(error);
    return rejectWithValue("Failed To Reach Users");
  }
});

const reportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReports.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReports.fulfilled, (state, action) => {
        (state.loading = false), (state.reports = action.payload);
        state.error = null;
      })
      .addCase(fetchReports.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload as string);
      });
  },
});

export default reportsSlice.reducer;
