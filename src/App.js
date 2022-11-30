import { useState, useEffect } from "react";
import Title from "./Title.js";
import Info from "./Info.js";
import Entry from "./Entry.js";
import Nav from "./Nav"
import { SignIn, SignOut, useAuthentication } from "./services/authService"
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const user = useAuthentication();

  function fetchData() {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=g41Q8ILou71Xrbkop2xuNXrS5pBo53hv&keyword=${name}&countryCode=US`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data._embedded.events);
        setData(data._embedded.events);
      });
  }
  {/*
  useEffect(() => {
    if (user) {
      fetchData().then(setData, [name])
    }
  }, [user])*/}
  useEffect(fetchData, [name]);

  return (
    <div className="App">
      <header>
        <Title text="Ticketmaster Data" />
      </header>
      <section>
        <Entry action={setName} />
        <Info name={name} data={data} />
      </section>
    </div>
  );
}
