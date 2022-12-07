export default function Event({ event }) {
    return (
        <div>
        {!event ? (
          <p>No event selected</p>
        ) : ( 
            <tbody>
                <tr>
                    <th>EventID</th>
                    {event.data._embedded.events.map((event) =>
                        <td>{event.id}</td>
                    )}
                </tr>
            {/*
            <section>
                {event.data._embedded.events.map((event) =>
                    <p>{event.id}</p>
                )}
                {event.data._embedded.events.map((event) =>
                    <p>{event.name}</p>
                )}
                {event.data._embedded.events.map(event => (
                    <div key={event.id}>
                        {event._embedded.venues.map(venue => (
                            <div key={venue.id}>
                                <p>{venue.name}</p>
                            </div>
                    ))}
                    </div>
                ))}
                {event.data._embedded.events.map(event => (
                    <div key={event.id}>
                        {event._embedded.venues.map(venue => (
                            <div key={venue.id}>
                                <p>{venue.city.name}, {venue.state.stateCode}</p>
                            </div>
                    ))}
                    </div>
                ))}
                {event.data._embedded.events.map((event) =>
                    <p>{event.dates.start.localDate}</p>
                )}
                {event.data._embedded.events.map(event => (
                    <div key={event.id}>
                        {event.priceRanges.map(venue => (
                            <div key={venue.id}>
                                <p>${venue.min} - ${venue.max}</p>
                            </div>
                    ))}
                    </div>
                ))}
                {event.data._embedded.events.map((event) =>
                    <img src={event.seatmap.staticUrl} alt="" height={100} />
                )}
          </section>
                */}
          </tbody>
        )}
      </div>
    );
  }

