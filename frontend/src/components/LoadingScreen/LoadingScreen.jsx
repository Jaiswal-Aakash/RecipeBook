import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-text">
        <span className="recipe">Recipe</span>{" "}
        <span className="book">Book</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
