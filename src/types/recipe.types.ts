export interface RecipeItem {
  id: number,
  name: string,
  image: string
}

export type RecipeItemData = Omit<RecipeItem, 'id'>