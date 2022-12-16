import { useState, useEffect } from "react";
import Title from "./Title.js";
import "./App.css";
import AddEvent from "./AddEvent.js";
import Nav from "./Nav.js";
import DisplayEvent from "./displayEvent.js";
import SeatMap from "./image.js";
import EventTitle from "./eventTitle.js";
import { fetchEvents } from "../services/eventService.js";
import { SignIn, SignOut, useAuthentication } from "../services/authService.js";

export default function App() {
  const [name, setName] = useState("");
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState(null);
  const user = useAuthentication()

  useEffect(() => {
    if (user) {
      fetchEvents().then(setEvents);
    }
  });

  return (
    <div className="App">
      <header>
        <div class="title">
          <Title text="Ticketmaster Event Data" />
        </div>
        <div class="sign">
          {!user ? <SignIn /> : <SignOut />}
        </div>
      </header>
      <div class="nav">
        {!user ? "" :<Nav events={events} setEvent={setEvent} />}
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
          <DisplayEvent event={event} />
        </div>
        <div class="images">
          <SeatMap event={event} />
        </div>
      </div>
    </div>
  );
}
