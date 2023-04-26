import {useState} from "react";
import Header from "./components/Header/Header.tsx";
import Recipe from "./components/Recipe/Recipe.tsx";
import User from "./components/User/User.tsx";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe.tsx";
import {useGetRecipesQuery} from "./store/api/api.ts";
import './App.css';

const userId = 1;

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [queryTerm, setQueryTerm] = useState('');

  const {isLoading, data} = useGetRecipesQuery(queryTerm, {
    skip: !userId
  });
  const handleSearch = () => {
    setQueryTerm(searchTerm);
  };

  return (
    <section>
      <Header />
      <User userId={userId} />
      <CreateRecipe />
      <div>
        <h3>Find any recipes :)</h3>
        <div>
          <input
            type="search"
            placeholder="Enter dish name..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
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
