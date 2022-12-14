import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";

export default function AddEvent({ action }) {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [content, setContent] = useState("");

  function submit(e) {
    e.preventDefault();
    if (name == "") {
      return;
    }
    action(content);
    setContent("");

    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=g41Q8ILou71Xrbkop2xuNXrS5pBo53hv&keyword=${name}&countryCode=US`;
    const eventCollectionRef = collection(db, "events");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data._embedded.events);
        data._embedded.events.map((event) =>
          addDoc(eventCollectionRef, { event })
        );
      });
  }
  return (
    <div>
      <form onSubmit={submit}>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Please Enter an Event"
        />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}
