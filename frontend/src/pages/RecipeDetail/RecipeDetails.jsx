import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchRecipeDetails } from "../../services/api";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import styles from "./RecipeDetails.module.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecipeDetails(id)
      .then((response) => setRecipe(response.data))
      .catch(() => setError("Failed to load recipe details."));
  }, [id]);

  if (error) return <div className={styles.error}>{error}</div>;
  if (!recipe) return <LoadingScreen />;

  return (
    <div className={styles.container}>
      <div className={styles.recipeCard}>
        <h1 className={styles.title}>{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className={styles.image} />
        <h2 className={styles.subtitle}>Ingredients</h2>
        <ul className={styles.ingredientsList}>
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id} className={styles.ingredient}>
              {ingredient.original}
            </li>
          ))}
        </ul>
        <h2 className={styles.subtitle}>Instructions</h2>
        <p className={styles.instructions}>{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;
