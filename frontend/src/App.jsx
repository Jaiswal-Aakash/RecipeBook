import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetail/RecipeDetails";
import Favorites from "./pages/Favourite";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import "./App.css";
const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route
        path="/favorites"
        element={
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
);

export default App;
