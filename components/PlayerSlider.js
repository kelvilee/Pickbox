export default function PlayerSlider(props) {
  return (
    <div>
      <p>Players: {props.players}</p>
      <input
        type="range"
        min="1"
        max="9"
        class="slider"
        value={props.players}
        onChange={props.onChange}
      />
    </div>
  );
}
