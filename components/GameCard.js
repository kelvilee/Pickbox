export default function GameCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <div className="card-desc">
        <h2>
          <b>{props.name}</b>
        </h2>
        <p>Party Pack: {props.pack}</p>
        <p>
          Players: {props.minPlayers}-{props.maxPlayers}
        </p>
        <a href={props.launcher}>Launch on Steam</a>
      </div>
    </div>
  );
}
