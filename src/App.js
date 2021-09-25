import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import './App.css';

const App = () => {
  
  const APP_ID = "e5e69860";
  const APP_KEY = "b87d39c90115d795d16e56fc765c4a88";

  const [ recipes, setRecipes ] = useState([]);
  const [ search, setSearch ] = useState("");
  const [ query, setQuery ] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }
  
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          placeholder="Search an ingredient or dish..."
          value={ search }
          onChange={ updateSearch }
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        { recipes.map(recipe => (
          <Recipe
            key={ recipe.recipe.label }
            title={ recipe.recipe.label }
            calories= { recipe.recipe.calories }
            image={ recipe.recipe.image }
            ingredients={ recipe.recipe.ingredients }
            servings ={ recipe.recipe.yield}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
