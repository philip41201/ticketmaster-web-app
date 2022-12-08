import { useState, useEffect } from "react";
import Title from "./Title.js";
import "./App.css";
import AddEvent from "./addEvent.js";
import Nav from "./Nav.js";
import { fetchEvents } from "./services/eventService.js";
import Event from "./displayEvent.js";

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
        <Title text="Ticketmaster Data" />
      </header>
      <div>
        <Nav events={events} setEvent={setEvent} />
      </div>
      <div id="info">
        <Event event={event} />
      </div>
      <div id="search">
        <AddEvent action={setName} />
      </div>
      {/*
      <section>
        <Nav events={events} setEvent={setEvent} />
        <Event event={event} />
      </section>
      <section id="test">
        <AddEvent action={setName}/>
      </section>
      */}
    </div>
  );
}
