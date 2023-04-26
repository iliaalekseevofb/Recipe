import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getUserById} from "./user.actions.ts";
import {UserInitialStateItem, UserItem} from "../../types/user.types.ts";

const initialState: UserInitialStateItem = {
  isLoading: false,
  error: null,
  user: {} as UserItem
}

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(getUserById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUserById.fulfilled, (state, action: PayloadAction<UserItem>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(getUserById.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.user = {} as UserItem;
      })
  }
})