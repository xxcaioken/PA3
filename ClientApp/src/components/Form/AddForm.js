import React, { useState } from 'react';
import './AddForm.css'

const AddForm = () => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventDescription, setEventDescription] = useState('');


    const addEvent = async () => {
        try {
            const response = await fetch('Event/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: eventName,
                    date: eventDate,
                    description: eventDescription,
                }),
            });

            if (response.ok) {
                alert('Congrats you added an event');


                setEventName('');
                setEventDate('');
                setEventDescription('');
            } else {
                console.error('Error adding event:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error adding event:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!eventName || !eventDate) {
            alert('Please fill in all fields');
            return;
        }

        addEvent();
    };

    return (
        <div style={{ marginInline: '20%' }}>
            <div className='title'>
                <span className='titleText'>Add some event</span>
            </div>
            <div className='description'>
                <form onSubmit={handleSubmit}>
                    <label>
                        Event Name:
                        <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
                    </label>
                    <br />
                    <label>
                        Event Date:
                        <input type="text" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required />
                    </label>
                    <br />
                    <label>
                        Event Description:
                        <textarea value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} />
                    </label>
                    <br />
                    <button type="submit">Add Event</button>
                </form>
            </div>
        </div>
    );
};

export default AddForm;