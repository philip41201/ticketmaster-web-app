export default function Event({ event }) {
  return (
    <div>
      {!event ? (
        <h2>No event selected</h2>
      ) : (
        <div>
          <div>
            <h1>{event.event.name}</h1>
            <p> URL:
              <a href={event.event.url} target="_blank">
                {event.event.url}
              </a>
            </p>
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
            <img
              src={event.event.seatmap.staticUrl}
              width="350"
              height="350"
            ></img>
          </div>
        </div>
      )}
    </div>
  );
}
{/*
{event.event.images.map((image, index) => 
            <div key={index}>
              <img src={image.url}></img>
            </div>
          )}
*/}
{/*
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
        */}