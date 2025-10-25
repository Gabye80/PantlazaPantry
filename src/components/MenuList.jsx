import React, { useState, useEffect } from "react";
import "./MenuList.css";
import MenuItem from "./MenuItem";
import { SEAFOOD_URL, DESSERT_URL, fetchMealsByUrl } from "../services/api";
import Loader from "./Loader";

function MenuList({ category }) {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function fetchMeals() {
      setError(null);
      setLoading(true);
      try {
        const url = category === "Dessert" ? DESSERT_URL : SEAFOOD_URL;
        const data = await fetchMealsByUrl(url);
        if (!cancelled) setMeals(data.meals || []);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled)
          setTimeout(() => {
            setLoading(false);
          }, 250);
      }
    }
    fetchMeals();
    return () => {
      cancelled = true;
    };
  }, [category]);

  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <>
      {loading && <Loader />}

      <div className="cards">
        {meals.length === 0 ? (
          <p>No meals found for {category}.</p>
        ) : (
          meals.map((item) => (
            <MenuItem key={item.idMeal} item={item} category={category} />
          ))
        )}
      </div>
    </>
  );
}

export default MenuList;
