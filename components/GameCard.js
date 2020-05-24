export default function GameCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <div className="card-desc">
        <h3>
          <b>{props.name}</b>
        </h3>
        <p>Party Pack: {props.pack}</p>
        <p>
          Players: {props.minPlayers}-{props.maxPlayers}
        </p>
        <a href={props.launcher}>Launch on Steam</a>
      </div>
    </div>
  );
}
