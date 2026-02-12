import { useEffect, useState } from "react";
import * as starshipService from "./services/starshipService";

import StarshipSearch from "./components/StarshipSearch/StarshipSearch";
import StarshipList from "./components/StarshipList/StarshipList";

const App = () => {
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const results = await starshipService.index();
        setStarshipsData(results);
        setDisplayedStarships(results);
      } catch (err) {
        setError(err.message || "Something went wrong.");
      }
    };

    fetchStarships();
  }, []);

  const handleSearch = (query) => {
  const normalized = query.trim().toLowerCase();

  const filtered = starshipsData.filter((ship) => {
    const name = (ship.name || "").toLowerCase();
    const model = (ship.model || "").toLowerCase();
    const manufacturer = (ship.manufacturer || "").toLowerCase();
    const starshipClass = (ship.starship_class || "").toLowerCase();

    return (
      name.includes(normalized) ||
      model.includes(normalized) ||
      manufacturer.includes(normalized) ||
      starshipClass.includes(normalized)
    );
  });

  setDisplayedStarships(filtered);
};


  const handleReset = () => {
    setDisplayedStarships(starshipsData);
  };

  const isFiltered = displayedStarships.length !== starshipsData.length;

  return (
    <main>
      <h1>Starships</h1>

      {error && <p>{error}</p>}

      <StarshipSearch
        resultCount={displayedStarships.length}
        handleSearch={handleSearch}
        handleReset={handleReset}
        isFiltered={isFiltered}
      />

      <StarshipList starships={displayedStarships} />
    </main>
  );
};

export default App;