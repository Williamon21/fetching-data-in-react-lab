const BASE_URL = "https://swapi.py4e.com/api/starships/"; 

export const index = async () => {
  try {
    const res = await fetch(BASE_URL);

    if (!res.ok) {
      throw new Error("Failed to fetch starships.");
    }

    const data = await res.json();
    return data.results;
  } catch (err) {
    console.log(err);
    throw err;
  }
};