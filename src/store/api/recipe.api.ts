import {api} from "./api.ts";
import {RecipeItemData} from "../../types/recipe.types.ts";

export const recipeApi = api.injectEndpoints({
  endpoints: builder => ({
    createRecipe: builder.mutation<null, RecipeItemData>({
      query: (recipe) => ({
        body: recipe,
        url: '/',
        method: 'POST'
      }),
      invalidatesTags: () => [{
        type: 'Recipe'
      }]
    })
  })
})

export const { useCreateRecipeMutation } = recipeApi;
