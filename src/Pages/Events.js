import React, { useState } from 'react';
import '../CSS/Events.css';
import eventsData from '../DataFiles/EventsData';
import Calendar from 'react-calendar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Events() {
    const [value, setValue] = useState(new Date());
    const [selectedEventIndex, setSelectedEventIndex] = useState(0);
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const openFullscreen = (image) => {
        setFullscreenImage(image);
    };

    const closeFullscreen = () => {
        setFullscreenImage(null);
    };

    function onChange(nextValue) {
        setValue(nextValue);
    }

    const handleImageChange = (index) => {
        setSelectedEventIndex(index);
    };

    const generateCarouselSlides = (event) => {
        return event.images.map((image, i) => (
            <div key={i} onClick={() => openFullscreen(image)}>
                <img src={image} alt={`Event ${i}`} />
            </div>
        ));
    };

    function tileContent({ date, view }) {
        const formattedDate = date.toISOString().split('T')[0];
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
                defaultView="month"
                calendarType="gregory"
                onChange={onChange}
                value={value}
                className="Calendar"
                tileContent={tileContent}
            />
<div className="EventList">
    {eventsData.map((event, index) => (
        <div key={index} className="EventElement">
            <strong>{event.title}</strong><br />
            <strong>Date:</strong> {event.date}<br />
            <br />
            {event.images.length > 0 && (
                <>
                    <div className="ImageContainer">
                        <Carousel
                            showThumbs={true}
                            showIndicators={false}
                            showStatus={false}
                            emulateTouch={true}
                            infiniteLoop={true}
                            selectedItem={selectedEventIndex}
                            onChange={handleImageChange}
                            centerMode
                            centerSlidePercentage={33.3}
                        >
                            {generateCarouselSlides(event)}
                        </Carousel>
                    </div>
                </>
            )}
        </div>
    ))}
</div>

            {fullscreenImage && (
                <div className="FullscreenOverlay" onClick={closeFullscreen}>
                    <img className="FullscreenImage" src={fullscreenImage} alt="Fullscreen" />
                </div>
            )}
        </div>
    );
}

export default Events;
