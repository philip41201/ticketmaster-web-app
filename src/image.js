export default function Image({ event }) {
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