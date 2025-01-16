import axios from "axios";

const API_KEY = "1682c8600c904536808fbbfb21c08b18";
const BASE_URL = "https://api.spoonacular.com/recipes";

export const fetchRecipes = (query = "") =>
    axios.get(`${BASE_URL}/complexSearch?query=${query}&apiKey=${API_KEY}`);

export const fetchRecipeDetails = (id) =>
    axios.get(`${BASE_URL}/${id}/information?apiKey=${API_KEY}`);