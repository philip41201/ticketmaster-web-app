export default function Event({ event }) {
  return (
    <div>
      {!event ? (
        <p>No event selected</p>
      ) : (
        <table cellspacing="15">
          <tr>
            <th>Name</th>
            <th>Venue</th>
            <th>Location</th>
            <th>Event Date</th>
            <th>Price Range</th>
            <th>Map</th>
            <th>Link</th>
          </tr>
          <tr>
            <td>{event.event.name}</td>
            {event.event._embedded.venues.map((venue) => (
              <td>{venue.name}</td>
            ))}
            {event.event._embedded.venues.map((venue) => (
              <td>
                {venue.city.name}, {venue.state.stateCode}
              </td>
            ))}
            <td>{event.event.dates.start.localDate}</td>
            {event.event.priceRanges.map((price) => (
              <td>
                ${price.min} - ${price.max}
              </td>
            ))}
            <img
              src={event.event.seatmap.staticUrl}
              width="250"
              height="250"
            ></img>
            <td>
              <a href={event.event.url} target="_blank">
                Link
              </a>
            </td>
          </tr>
        </table>
      )}
    </div>
  );
}
