import {useActions} from "../../hooks/useActions.ts";
import {useFavorites} from "../../hooks/useFavorites.ts";
import styles from './Recipe.module.css';
import {RecipeItem} from "../../types/recipe.types.ts";

interface RecipeItemProps {
  recipe: RecipeItem
}

const Recipe = ({ recipe }: RecipeItemProps) => {
  const favorites = useFavorites();
  const { toggleFavorites } = useActions();

  const isInFavorites = favorites.some(existingRecipe => existingRecipe.id === recipe.id);

  return (
    <div className={styles.recipe}>
      <img src={recipe.image} alt={recipe.name}/>
      <h3>{recipe.name}</h3>
      <button onClick={() => toggleFavorites(recipe)}>
        {isInFavorites ? 'Remove from favorites' : 'Add to favorites'}
      </button>
    </div>
  )
}
export default Recipe
