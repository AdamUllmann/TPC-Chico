import React, { useState } from 'react';
import '../CSS/Events.css';
import eventsData from '../DataFiles/EventsData';
import Calendar from 'react-calendar';

function Events() {
    const [value, setValue] = useState(new Date());

    function onChange(nextValue) {
        setValue(nextValue);
    }

    function tileContent({ date, view }) {
        const formattedDate = date.toISOString().split('T')[0]; // Convert date to ISO format
        const eventsForDay = eventsData.filter((event) => event.date === formattedDate);
        if (eventsForDay.length > 0) {
            return (
                <div>
                    {eventsForDay.map((event, index) => (
                        <p key={index}>{event.title}</p>
                    ))}
                </div>
            );
        }
        return null;
    }


    return (
        <div className="EventBody">
            <Calendar
                locale
                defaultView="month"
                calendarType="gregory"
                onChange={onChange}
                value={value}
                className="Calendar"
                tileContent={tileContent}
            />
            <ul className="EventList">
                {eventsData.map((event, index) => (
                    <li key={index} className="EventElement">
                        <strong>Date:</strong> {event.date}<br />
                        <strong>Title:</strong> {event.title}<br />
                        <strong>Description:</strong> {event.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Events;
