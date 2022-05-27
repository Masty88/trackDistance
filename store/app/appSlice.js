import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import appService from './appServices';

export const getDirection = createAsyncThunk(
  'matrix/get',
  async (points, thunkApi) => {
    try {
      return await appService.getDirection(
        points[1].coordinates,
        points[2].coordinates,
      );
    } catch (error) {
      const message = error.response;
      return thunkApi.rejectWithValue(message);
    }
  },
);

const appSlice = createSlice({
  name: 'app',
  initialState: {
    loading: true,
    latitude: null,
    longitude: null,
    points: [],
  },
  reducers: {
    toggleLoading: (state, action) => {
      state.loading = !state.loading;
    },
    setLatitude: (state, action) => {
      state.latitude = action.payload;
    },
    setLongitude: (state, action) => {
      state.longitude = action.payload;
    },
    addPoint: (state, action) => {
      const point = {
        coordinates: [state.longitude, state.latitude],
        id: Math.random() * 100,
      };
      state.points.push(point);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getDirection.pending, state => {
        state.loading = true;
      })
      .addCase(getDirection.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      })
      .addCase(getDirection.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      });
  },
});

export const {toggleLoading, setLatitude, setLongitude, addPoint} =
  appSlice.actions;
export default appSlice.reducer;
