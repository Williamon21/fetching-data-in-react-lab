import StarshipCard from "../StarshipCard/StarshipCard";

const StarshipList = ({ starships }) => {
  if (!starships) return <p>Loading...</p>;
  if (starships.length === 0) return <p>No starships found.</p>;

  return (
    <section>
      <ul>
        {starships.map((starship) => (
          <StarshipCard key={starship.url} starship={starship} />
        ))}
      </ul>
    </section>
  );
};

export default StarshipList;
