export default function EventTitle({ event }) {
  return (
    <div>
      {!event ? (
        <p></p>
      ) : (
        <div>
          <h2>
            <a href={event.event.url} target="_blank">
              {event.event.name}
            </a>
          </h2>
        </div>
      )}
    </div>
  );
}
