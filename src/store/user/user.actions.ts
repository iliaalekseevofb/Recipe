import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserItem} from "../../types/user.types.ts";

const fetchUserById = (userId: number): Promise<UserItem> => (
  new Promise((resolve) => {
    setTimeout(() => resolve({
      id: userId,
      name: 'Ilia'
    }), 1000)
  })
)

export const getUserById = createAsyncThunk<UserItem, number>(
  'user/by-id',
  async(userId, thunkApi) => {
    try {
      return await fetchUserById(userId);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
)