export default function Nav({ events, setEvents }) {
    return (
      <nav>
        {!events
          ? "No events"
          : events.map((event) => (
              <p key={event.id} onClick={() => setEvent(event)}>
                {event.id}
              </p>
            ))}
      </nav>
    );
  }
  