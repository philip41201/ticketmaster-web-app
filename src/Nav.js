import { db } from "./firebaseConfig.js";
import { deleteDoc, doc } from "firebase/firestore";
export default function Nav({ events, setEvent }) {
  
  const deleteEvent = async (id) => {
    const userDoc = doc(db, "events", id);
    await deleteDoc(userDoc);
  };

  return (
    <nav>
      {events.map((event) => (
        <div>
          <p onClick={() => setEvent(event)}>
            ({event.event.name},
            {event.event._embedded.venues.map((venue) => (
              <p>
                {venue.city.name}, {venue.state.stateCode}{" "}
              </p>
            ))}
            {event.event.dates.start.localDate})
          </p>
          <button
            onClick={() => {
              deleteEvent(event.id);
            }}
          >
            Delete Event
          </button>
        </div>
      ))}
    </nav>
  );
}
