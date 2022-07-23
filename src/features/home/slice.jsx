/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import service from './service';

const initialState = {
  user: {
    data: [],
    loading: false,
    error: false,
  },
};

export const getUser = createAsyncThunk('home/get-user', async (arg, thunkAPI) => {
  try {
    return service.getUser(arg);
  } catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message &&
        error.response.data.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const slice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.user.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user.loading = false;
        state.user.data = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.user.loading = false;
        state.user.error = true;
      });
  },
});

export default slice.reducer;
