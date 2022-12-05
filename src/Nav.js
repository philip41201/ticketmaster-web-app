export default function Nav({ articles, setArticle }) {
    return (
      <nav>
        {!articles
          ? "No articles"
          : articles.map((a) => (
              <p key={a.id} onClick={() => setArticle(a)}>
                {a.data._embedded.events.map((event) =>
                    <p>{event.name}</p>
                )}
                {a.data._embedded.events.map(event => (
                    <div key={event.id}>
                        {event._embedded.venues.map(venue => (
                            <div key={venue.id}>
                                <p>{venue.name}</p>
                            </div>
                    ))}
                    </div>
                ))}
              </p>
            ))}
      </nav>
    );
  }