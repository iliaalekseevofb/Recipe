import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {RecipeItem} from "../../types/recipe.types.ts";

const RECIPES_API_BASE_URL= "http://localhost:4200/recipes";

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Recipe'],
  baseQuery: fetchBaseQuery({
    baseUrl: RECIPES_API_BASE_URL,
  }),
  endpoints: builder => ({
    getRecipes: builder.query<RecipeItem[], null>({
      query: () => '/?_sort=id&_order=desc',
      providesTags: () => [{
        type: 'Recipe'
      }]
    }),
  })
})

export const { useGetRecipesQuery } = api;