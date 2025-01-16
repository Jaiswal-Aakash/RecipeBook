import React from "react";
import { auth } from "../services/firebase";
import { signOut } from "firebase/auth";

const Logout = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
    } catch (err) {
      console.error("Error logging out: ", err);
    }
  };

  return (
    <button
      onClick={handleLogout}
      style={{ padding: "0.5rem", background: "red", color: "#fff" }}
    >
      Logout
    </button>
  );
};

export default Logout;
