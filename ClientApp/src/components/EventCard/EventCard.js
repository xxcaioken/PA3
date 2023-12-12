import React, { useState, useEffect } from 'react';
import './EventCard.css';

const EventCard = React.memo((props) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    async function populateEventData() {
        try {
            const response = await fetch('Event');
            const data = await response.json();
            setEvents(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching events data:', error);
            setLoading(false);
        }
    }

    useEffect(() => {
        populateEventData();
    }, []);

    const remove = async (event) => {
        try {
            const response = await fetch('Event/Remove', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: event[0].name,
                }),
            });
            if (response.ok)
                alert('Congrats you removed an event');

        } catch (error) {
            console.error('Error adding event:', error);
        }
    };

    const handleRemoveCard = (name) => {
        remove(events.filter((event) => event.name === name));
        const updatedEvents = events.filter((event) => event.name !== name).name;
        setEvents(updatedEvents);
    };

    useEffect(() => {
        console.log(events);
    }, [events]);

    return (
        <div>
            {loading && events.length > 0 ? (
                <p>Loading...</p>
            ) : (
                <div className="card-list">
                    {events.map((card) => (
                        <div key={card.id} className="card">
                            <h3>{card.name}</h3>
                            <p>{card.description}</p>
                            <p>{card.date}</p>
                            <button className='buttonStyled' onClick={() => handleRemoveCard(card.name)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
});

export default EventCard;
