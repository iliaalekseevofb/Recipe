import Header from "./components/Header/Header.tsx";
import Recipe from "./components/Recipe/Recipe.tsx";
import User from "./components/User/User.tsx";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe.tsx";
import {useGetRecipesQuery} from "./store/api/api.ts";
import './App.css';

const userId = 1;

function App() {
  const {isLoading, data} = useGetRecipesQuery(null, {
    skip: !userId
  });

  return (
    <section>
      <Header />
      <User userId={userId} />
      <CreateRecipe />
      <div>
      {isLoading ? <div>Is loading...</div> :
        data ? data.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        )) : <div>Recipes are not found</div>
      }
      </div>
    </section>
  )
}

export default App
