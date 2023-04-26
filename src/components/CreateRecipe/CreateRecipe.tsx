import {FormEvent, useState} from "react";
import {useCreateRecipeMutation} from "../../store/api/recipe.api.ts";
import {RecipeItemData} from "../../types/recipe.types.ts";

const defaultRecipeValue: RecipeItemData = {
  name: '',
  image: ''
}

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState<RecipeItemData>(defaultRecipeValue);
  const [createRecipe] = useCreateRecipeMutation();

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (recipe.image && recipe.name) {
      createRecipe(recipe).then(() => {
        setRecipe(defaultRecipeValue);
      });
    }
  };

  return (
    <div>
      <h3>Form for new recipe</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Recipe name..."
            value={recipe.name}
            onChange={e => setRecipe({
              ...recipe,
              name: e.currentTarget.value
            })}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Image url..."
            value={recipe.image}
            onChange={e => setRecipe({
              ...recipe,
              image: e.currentTarget.value
            })}
          />
        </label>
        <button type="submit">
          Add new recipe
        </button>
      </form>
    </div>
  )
}
export default CreateRecipe
