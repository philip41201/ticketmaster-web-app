export default function Nav({ events, setEvent }) {
    return (
      <nav>
        {!events
          ? "No events"
          : events.map((a) => (
              <p key={a.id} onClick={() => setEvent(a)}>
                {a.data._embedded.events.map((event) =>
                    <p>{event.name}</p>
                )}
              </p>
            ))}
      </nav>
    );
  }