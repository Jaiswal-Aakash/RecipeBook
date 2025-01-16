import { Link } from "react-router-dom";
import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const RecipeCard = ({ recipe, onFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onFavorite(recipe);
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{
          width: "100%",
          borderRadius: "8px",
          objectFit: "cover",
          maxHeight: "150px",
          marginBottom: "1rem",
        }}
      />
      <h3
        style={{
          margin: "0 0 1rem",
          fontSize: "1.2rem",
          fontFamily: "Roboto, sans-serif",
          color: "#333",
        }}
      >
        {recipe.title}
      </h3>
      <p
        style={{
          fontSize: "0.9rem",
          color: "#666",
          flexGrow: 1,
          marginBottom: "1rem",
        }}
      >
        {recipe.summary?.replace(/<[^>]+>/g, "").substring(0, 100)}...
      </p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={toggleFavorite}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.5rem",
            color: isFavorite ? "#FFD700" : "#bbb",
          }}
        >
          {isFavorite ? <FaStar /> : <FaRegStar />}
        </button>
        <Link
          to={`/recipe/${recipe.id}`}
          style={{
            textDecoration: "none",
            padding: "0.5rem 1rem",
            backgroundColor: "#007BFF",
            color: "#fff",
            fontSize: "0.9rem",
            fontFamily: "Roboto, sans-serif",
            borderRadius: "4px",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007BFF")}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
