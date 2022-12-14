export default function SeatMap({ event }) {
  return (
    <div>
      {!event ? (
        <p></p>
      ) : (
        <div>
          <img
            src={event.event.seatmap.staticUrl}
            width="500"
            height="375"
          ></img>
        </div>
      )}
    </div>
  );
}
