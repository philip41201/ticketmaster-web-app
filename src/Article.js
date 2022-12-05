export default function Article({ article }) {
    return (
      <article>
        {!article ? (
          <p>No article selected</p>
        ) : ( 
            <section>
                {article.data._embedded.events.map((event) =>
                    <p>{event.id}</p>
                )}
                {article.data._embedded.events.map((event) =>
                    <p>{event.name}</p>
                )}
                {article.data._embedded.events.map(event => (
                    <div key={event.id}>
                        {event._embedded.venues.map(venue => (
                            <div key={venue.id}>
                                <p>{venue.name}</p>
                            </div>
                    ))}
                    </div>
                ))}
                {article.data._embedded.events.map(event => (
                    <div key={event.id}>
                        {event._embedded.venues.map(venue => (
                            <div key={venue.id}>
                                <p>{venue.city.name}, {venue.state.stateCode}</p>
                            </div>
                    ))}
                    </div>
                ))}
                {article.data._embedded.events.map((event) =>
                    <p>{event.dates.start.localDate}</p>
                )}
                {article.data._embedded.events.map(event => (
                    <div key={event.id}>
                        {event.priceRanges.map(venue => (
                            <div key={venue.id}>
                                <p>${venue.min} - ${venue.max}</p>
                            </div>
                    ))}
                    </div>
                ))}
                {article.data._embedded.events.map((event) =>
                    <img src={event.seatmap.staticUrl} alt="" height={100} />
                )}
          </section>
        )}
      </article>
    );
  }

