import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export interface GeneralState {
  currentOrganizationId?: string;
  currentProjectId?: string;
}

const initialState: GeneralState = {
  currentOrganizationId: undefined,
  currentProjectId: undefined,
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setCurrentOrganizationId: (
      state,
      action: PayloadAction<string | undefined>,
    ) => {
      state.currentOrganizationId = action.payload;
    },
    setCurrentProjectId: (state, action: PayloadAction<string | undefined>) => {
      state.currentProjectId = action.payload;
    },
  },
});

// --------------------------------------------------

export const { setCurrentOrganizationId, setCurrentProjectId } =
  generalSlice.actions;

// --------------------------------------------------

export const currentOrganizationId = (state: RootState) =>
  state.general.currentOrganizationId;

export const currentProjectId = (state: RootState) =>
  state.general.currentProjectId;

// --------------------------------------------------

export default generalSlice.reducer;
