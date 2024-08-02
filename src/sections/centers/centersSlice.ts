import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Center } from "../../types/center";
import { centerDataAPI } from "@/data/CentersData";

interface CentersState {
  centers: Center[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CentersState = {
  centers: [],
  status: "idle",
  error: null,
};

export const fetchCenters = createAsyncThunk(
  "centers/fetchCenters",
  async () => {
    // In a real app, this would be an API call
    const response = await centerDataAPI();
    return response;
  }
);

// as we dont have real api and trying to emulate a get api, we need not implemnt complete slice reducers.

const centersSlice = createSlice({
  name: "centers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCenters.pending, (state) => {
        state.status = "loading";
      }) //@ts-ignore
      .addCase(
        fetchCenters.fulfilled,
        (state, action: PayloadAction<Center[]>) => {
          state.status = "succeeded";
          state.centers = action.payload;
        }
      )
      .addCase(fetchCenters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default centersSlice.reducer;
