import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// --------------------------------------------------
//
//  Initial State
//
// --------------------------------------------------

export interface ProjectState {
  currentClipId: string;
  currentLayerId: string;
}

const initialState: ProjectState = {
  currentClipId: '',
  currentLayerId: '',
};

// --------------------------------------------------
//
//  Slice
//
// --------------------------------------------------

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setCurrentClipId: (state, action: PayloadAction<string>) => {
      state.currentClipId = action.payload;
    },
    setCurrentLayerId: (state, action: PayloadAction<string>) => {
      state.currentLayerId = action.payload;
    },
  },
});

// --------------------------------------------------
//
//  Actions
//
// --------------------------------------------------

export const { setCurrentClipId, setCurrentLayerId } = projectSlice.actions;

// --------------------------------------------------
//
//  Selectors
//
// --------------------------------------------------

export const selectCurrentClipId = (state: RootState) =>
  state.project.currentClipId;
export const selectCurrentLayerId = (state: RootState) =>
  state.project.currentLayerId;

// --------------------------------------------------
//
//  Reducer
//
// --------------------------------------------------

export default projectSlice.reducer;
