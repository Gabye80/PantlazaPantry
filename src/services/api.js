const BASE = 'https://www.themealdb.com/api/json/v1/1';

export const SEAFOOD_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
export const DESSERT_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert';

export async function fetchMealsByUrl(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Error fetching meals: ${res.status}`);
  }
  return res.json();
}

