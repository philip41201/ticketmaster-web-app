export default function Event({ event }) {
  return (
    <div>
      {!event ? (
        <h2></h2>
      ) : (
        <div>
          <div>
            {event.event._embedded.venues.map((venue) => (
              <p>Venue: {venue.name}</p>
            ))}
            {event.event._embedded.venues.map((venue) => (
              <p>
                Location: {venue.city.name}, {venue.state.stateCode}
              </p>
            ))}
            <p>Event Date: {event.event.dates.start.localDate}</p>
            {event.event.priceRanges.map((price) => (
              <p>
                Price Range: ${price.min} - ${price.max}
              </p>
            ))}
            <p>Ticket Limit: {event.event.accessibility.ticketLimit}</p>
          </div>
        </div>
      )}
    </div>
  );
}
