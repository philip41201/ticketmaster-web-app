import { useState, useEffect } from "react";
import Title from "./Title.js";
import Info from "./Info.js";
import Entry from "./Entry.js";
import List2 from "./List2.js";
import Nav from "./Nav.js";
import "./App.css";
import AddEvent from "./AddEvent.js";

export default function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <header>
        <Title text="Ticketmaster Data" />
      </header>
      <section>
        <List2 />
        <AddEvent action={setName}/>
      </section>
      {/*
      <section>
        <Entry action={setName} />
        <Info name={name} data={data} />
      </section>
      */}
    </div>
  );
}
