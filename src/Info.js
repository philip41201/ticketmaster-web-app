export default function Info({ name, data }) {
    if (!data) {
      return <p></p>;
    } else {
      return (
        <div>
          <h2>Here are the details for {name}</h2>
          <tbody>
            <tr>
              <th>eventID</th>
              <th>Name</th>
              <th>Venue</th>
              <th>eventDate</th>
              <th>onSaleDate</th>
            </tr>
            {data.map((event) => (
              <tr>
                <td>{event.id}</td>
                <td>{event.name}</td>
                <td>
                  <img src={event.seatmap?.staticUrl} alt="" height={100} />
                </td>
                <td>{event.dates.start.localDate}</td>
                <td>{event.sales.public.startDateTime}</td>
              </tr>
            ))}
          </tbody>
        </div>
      );
    }
  }
  