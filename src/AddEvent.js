import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";

export default function AddEvent({ action }) {
    const [name, setName] = useState('')
    const [data, setData] = useState([]);
    const [content, setContent] = useState("");

    function submit(e) {
        e.preventDefault();
        if (name == '') {
            return
        }
        action(content);
        setContent("");
        
        {/*const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=g41Q8ILou71Xrbkop2xuNXrS5pBo53hv&keyword=Lizzy+McAlpine+Dallas&countryCode=US`;*/}
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=g41Q8ILou71Xrbkop2xuNXrS5pBo53hv&keyword=${name}&countryCode=US`;
        const eventCollectionRef = collection(db, 'events')
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setData(data._embedded.events);
            addDoc(eventCollectionRef, {data}).then(data => {
                console.log(data)
            })
        });
}
    return (
        <div>
            <form onSubmit={submit}>
                <input 
                    id='name' 
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Please Enter an Event"
                    size="100"
                />
                <button type='submit'>Add Event</button>
            </form>
            {/*
            <tbody>
                <tr>
                    <th>eventID</th>
                    <th>name</th>
                    <th>venue</th>
                    <th>city</th>
                    <th>state</th>
                    <th>eventDate</th>
                    <th>minPrice</th>
                    <th>maxPrice</th>
                </tr>
                {data.map((event) => (
                    <tr>
                        <td>{event.id}</td>
                        <td>{event.name}</td>
                        {event._embedded.venues.map((venue) => (
                            <td>{venue.name}</td>
                        ))}
                        {event._embedded.venues.map((venue) => (
                            <td>{venue.city.name}</td>
                        ))}
                        {event._embedded.venues.map((venue) => (
                            <td>{venue.state.name}</td>
                        ))}
                        <td>{event.dates.start.localDate}</td>
                        {event.priceRanges.map((venue) => (
                            <td>{venue.min}</td>
                        ))}
                        {event.priceRanges.map((venue) => (
                            <td>{venue.max}</td>
                        ))}
                    </tr>
                ))}
            </tbody>*/}
        </div>
    )
}

