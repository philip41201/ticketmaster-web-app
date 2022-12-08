export default function Nav({ events, setEvent }) {
  return (
    <nav>
      {events.map((event) => (
        <p onClick={() => setEvent(event)}>
          ({event.event.name},
          {event.event._embedded.venues.map((venue) => (
            <p>
              {venue.city.name}, {venue.state.stateCode}{" "}
            </p>
          ))}
          {event.event.dates.start.localDate})
        </p>
      ))}
      {/*
        {events.map((a) => (
          <p key={a.id} onClick={() => setEvent(a)}>
            {a.data._embedded.events.map((event) =>
              <p>
                {event.name}
              </p>
            )}
          </p>
        ))}
        */}
    </nav>
  );
}
