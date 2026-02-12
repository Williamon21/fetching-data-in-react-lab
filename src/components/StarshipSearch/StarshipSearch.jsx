import { useState } from "react";

const StarshipSearch = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [prevSearchTerm, setPrevSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.handleSearch(searchTerm);      // run search in App
    setPrevSearchTerm(searchTerm.trim()); // save what they searched
    setSearchTerm("");                    // reset input
  };

  const hasFilter = props.isFiltered;

  return (
    <section>
      <p className="search-meta">
        <strong>Results:</strong> {props.resultCount}
      </p>

      <p className="search-meta">
        {prevSearchTerm
          ? `Last search: "${prevSearchTerm}"`
          : "Search for a starship by name."}
      </p>

      <form onSubmit={handleSubmit}>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="e.g. Falcon"
        />
        <button type="submit">Search</button>

        {hasFilter && (
          <button type="button" onClick={props.handleReset}>
            Show all starships
          </button>
        )}
      </form>
    </section>
  );
};

export default StarshipSearch;