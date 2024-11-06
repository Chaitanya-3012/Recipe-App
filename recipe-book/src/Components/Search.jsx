import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./search.module.css";
import SearchIcon from "@mui/icons-material/Search";

export default function Search({ recipe, setRecipe }) {
  const [query, setQuery] = useState("Pizza");
  const [isLoading, setIsLoading] = useState(false);
  const apiLink = "https://api.spoonacular.com/recipes/complexSearch";
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(apiLink, {
          params: {
            query: query,
            apiKey: apiKey
          }
        });
        setRecipe(response.data.results);
      } catch (error) {
        console.error("Error fetching recipes:", error.response?.data || error.message);
      } finally {
        setIsLoading(false);
      }
    };

    // Add debounce here if needed
    const timeoutId = setTimeout(() => {
      fetchRecipes();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query, setRecipe]);

  return (
    <div>
      <div className={styles.inputWrapper}>
        <SearchIcon className={styles.searchIcon} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      {isLoading && <p>Loading...</p>}
    </div>
  );
}
