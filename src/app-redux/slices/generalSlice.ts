import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// --------------------------------------------------
//
//  Initial State
//
// --------------------------------------------------

export interface GeneralState {
  initialized: boolean;
  isLoading: boolean;
  isSidebarOpened?: boolean;
  isSecondarySidebarOpened?: boolean;
  currentUserId?: string;
  currentUserAccessToken?: string;
  currentUserName?: string;
  currentUserEmail?: string;
  statusMessage: string;
}

const initialState: GeneralState = {
  initialized: false,
  isLoading: false,
  isSidebarOpened: false,
  isSecondarySidebarOpened: false,
  currentUserId: undefined,
  currentUserAccessToken: undefined,
  currentUserName: undefined,
  currentUserEmail: undefined,
  statusMessage: 'Ready',
};

// --------------------------------------------------
//
//  Slice
//
// --------------------------------------------------

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setInitialized: (state, action: PayloadAction<boolean>) => {
      state.initialized = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsSidebarOpened: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpened = action.payload;
    },
    setIsSecondarySidebarOpened: (state, action: PayloadAction<boolean>) => {
      state.isSecondarySidebarOpened = action.payload;
    },
    setCurrentUserId: (state, action: PayloadAction<string | undefined>) => {
      state.currentUserId = action.payload;
    },
    setCurrentUserAccessToken: (
      state,
      action: PayloadAction<string | undefined>,
    ) => {
      state.currentUserAccessToken = action.payload;
    },
    setCurrentUserName: (state, action: PayloadAction<string | undefined>) => {
      state.currentUserName = action.payload;
    },
    setCurrentUserEmail: (state, action: PayloadAction<string | undefined>) => {
      state.currentUserEmail = action.payload;
    },
    setStatusMessage: (state, action: PayloadAction<string>) => {
      state.statusMessage = action.payload;
    },
  },
});

// --------------------------------------------------
//
//  Actions
//
// --------------------------------------------------

export const {
  setInitialized,
  setIsLoading,
  setIsSidebarOpened,
  setIsSecondarySidebarOpened,
  setCurrentUserId,
  setCurrentUserAccessToken,
  setCurrentUserName,
  setCurrentUserEmail,
  setStatusMessage,
} = generalSlice.actions;

// --------------------------------------------------
//
//  Selectors
//
// --------------------------------------------------

export const selectInitialized = (state: RootState) =>
  state.general.initialized;

export const selectIsLoading = (state: RootState) => state.general.isLoading;

export const selectIsSidebarOpened = (state: RootState) =>
  state.general.isSidebarOpened;

export const selectIsSecondarySidebarOpened = (state: RootState) =>
  state.general.isSecondarySidebarOpened;

export const selectCurrentUserId = (state: RootState) =>
  state.general.currentUserId;

export const selectCurrentUserAccessToken = (state: RootState) =>
  state.general.currentUserAccessToken;

export const selectCurrentUserName = (state: RootState) =>
  state.general.currentUserName;

export const selectCurrentUserEmail = (state: RootState) =>
  state.general.currentUserEmail;

export const selectStatusMessage = (state: RootState) =>
  state.general.statusMessage;

// --------------------------------------------------
//
//  Reducer
//
// --------------------------------------------------

export default generalSlice.reducer;
