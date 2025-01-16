import { useState, useEffect } from "react";
import { fetchRecipes } from "../services/api";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar/SearchBar";
import { db } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  const loadRecipes = (query = "") => {
    fetchRecipes(query)
      .then((response) => setRecipes(response.data.results))
      .catch(() => setError("Failed to fetch recipes."));
  };

  const addToFavorites = async (recipe) => {
    try {
      await addDoc(collection(db, "favorites"), recipe);
      alert("Recipe added to favorites!");
    } catch (e) {
      console.error("Error adding to favorites: ", e);
    }
  };

  useEffect(() => {
    loadRecipes();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <SearchBar onSearch={loadRecipes} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "5rem",
          padding: "1rem",
        }}
      >
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onFavorite={addToFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
