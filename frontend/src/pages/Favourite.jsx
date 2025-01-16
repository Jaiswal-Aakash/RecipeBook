import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const querySnapshot = await getDocs(collection(db, "favorites"));
      setFavorites(querySnapshot.docs.map((doc) => doc.data()));
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      <h1>Your Favorite Recipes</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        {favorites.map((recipe, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1rem",
            }}
          >
            <h3>{recipe.title}</h3>
            <img
              src={recipe.image}
              alt={recipe.title}
              style={{ width: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
