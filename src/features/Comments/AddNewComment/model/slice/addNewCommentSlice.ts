import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddNewCommentSchema } from '../types/addNewComment';

export const initialState: AddNewCommentSchema = {
  text: '',
  status: 'init',
};

export const addNewCommentSlice = createSlice({
  name: 'addNewComment',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  extraReducers: {},
});

export const { actions: addNewCommentActions } = addNewCommentSlice;
export const { reducer: addNewCommentReducer } = addNewCommentSlice;

//extraReducers: builder => {
//  builder
//    .addCase(getProfile.pending, state => {
//      state.error = undefined;
//      state.status = 'loading';
//    })
//    .addCase(getProfile.fulfilled, (state, action) => {
//      state.status = 'idle';
//      state.fetchData = action.payload;
//      state.formData = action.payload;
//    })
//    .addCase(getProfile.rejected, (state, action) => {
//      state.status = 'reject';
//      state.error = action.payload;
//    })
//    .addCase(updateProfileData.pending, state => {
//      state.validationErrors = undefined;
//      state.status = 'loading';
//    })
//    .addCase(updateProfileData.fulfilled, (state, action) => {
//      state.status = 'idle';
//      state.fetchData = action.payload;
//      state.formData = action.payload;
//      state.readonly = true;
//    })
//    .addCase(updateProfileData.rejected, (state, action) => {
//      state.status = 'reject';
//      state.validationErrors = action.payload;
//    });
//},
