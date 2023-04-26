import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RecipeItem} from "../../types/recipe.types.ts";

const initialState: RecipeItem[] = []

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    toggleFavorites: (state, { payload: newRecipe }: PayloadAction<RecipeItem>) => {
      const isInFavorites = state.some(
        recipe => recipe.id === newRecipe.id
      )

      if (isInFavorites) {
        const index = state.findIndex(item => item.id === newRecipe.id);

        if (index !== -1) {
          state.splice(index, 1);
        }
      } else {
        state.push(newRecipe);
      }
    }
  }
})

export const { actions, reducer } = favoritesSlice;