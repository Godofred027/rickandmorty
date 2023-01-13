import Card from "./Card";

export default function Cards({ characters }) {
  return (
    <div className="container mt-5 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
        {characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
