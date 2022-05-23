import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import appService from './appService';


//Get start position
export const getPosition = createAsyncThunk('app/position', async thunkApi => {
  try {
    return await appService.getPosition();
  } catch (error) {
    const message = error.response.data.errors[0].msg;
    return thunkApi.rejectWithValue(message);
  }
});

const appSlice = createSlice({
  name: 'app',
  initialState: {
    loading: true,
    latitude: null,
    longitude: null,

  },
  reducers: {
    toggleLoading: (state, action) => {
      state.loading = !state.loading;
    },
    getPosition:(state,action)=>{
       
    }
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(getPosition.pending, state => {
  //       state.loading = true;
  //     })
  //     .addCase(getPosition.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.position = action.payload;
  //
  //     })
  //     .addCase(getPosition.rejected, state => {
  //       state.loading = false;
  //     });
  // },
});

export const {toggleLoading, getLatitude} = appSlice.actions;
export default appSlice.reducer;
