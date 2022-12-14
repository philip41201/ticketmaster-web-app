import { useState, useEffect } from "react";
import Title from "./Title.js";
import "./App.css";
import AddEvent from "./AddEvent.js";
import Nav from "./Nav.js";
import { fetchEvents } from "./services/eventService.js";
import Event from "./displayEvent.js";
import Image from "./image.js";
import EventTitle from "./eventTitle.js";


export default function App() {
  const [name, setName] = useState("");
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    {
      fetchEvents().then(setEvents);
    }
  });

  return (
    <div className="App">
      <header id="title">
        <Title text="Ticketmaster Event Data" />
      </header>
      <div class="nav">
        <Nav events={events} setEvent={setEvent} />
      </div>
      <div class="info">
        <div class="both">
          <div class="search">
            <AddEvent action={setName} />
          </div>
          <div class="eventTitle">
            <EventTitle event={event} />
          </div>
        </div>
        <div class="eventInfo">
          <Event event={event} />
        </div>
        <div class="images">
          <Image event={event} />
        </div>
      </div>
    </div>
  );
}
