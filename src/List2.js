import { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import { collection, doc, getDocs } from "firebase/firestore";

export default function List() {
    const [events, setEvents] = useState([]);

    function getEvents() {
        const eventCollectionRef = collection(db, "events");         
        getDocs(eventCollectionRef)
          .then((response) => {
            const evs = response.docs.map((event) => ({
              data: event.data(),
              id: event.id,
            }))
            setEvents(evs)
          })
          .catch((error) => console.log(error.message));
          console.log(events);
      }

      useEffect(() => {
        getEvents();
      }, []);

      return (
        <div>
          <button onClick={() => getEvents()}>Refresh</button>
          {events.map(event => (
            <p>{event.id}</p>
          ))}
        </div>
      );
}