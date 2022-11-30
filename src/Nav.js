export default function Nav({ events, setEvent }) {
    return (
      <nav>
        {!events
          ? "No events"
          : events.map((a) => (
              <p key={a.id} onClick={() => setEvent(a)}>
                {a.id}
              </p>
            ))}
      </nav>
    );
  }
  