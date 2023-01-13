export default function Card({ character }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={character.image} alt={character.name} />
      <div className="text-center">
        <h3>{character.name}</h3>
        <p>{character.species}</p>
        <p>{character.status}</p>
      </div>
    </div>
  );
}
