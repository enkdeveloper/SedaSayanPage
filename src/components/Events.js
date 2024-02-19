import React, { useState } from 'react';
import './Events.css';
import { FaTrashAlt, FaEdit } from 'react-icons/fa'; 

function Events() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");
  const [editIndex, setEditIndex] = useState(null); 

  const handleAddEvent = () => {
    if (newEvent.trim() !== "") {
      if (editIndex !== null) {
        const updatedEvents = [...events];
        updatedEvents[editIndex] = newEvent;
        setEvents(updatedEvents);
        setEditIndex(null); 
      } else {
        setEvents([...events, newEvent]);
      }
      setNewEvent("");
    }
  };

  const handleEditEvent = (index) => {
    setNewEvent(events[index]); 
    setEditIndex(index);
  };

  const handleDeleteEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1); 
    setEvents(updatedEvents);
  };

  return (
    <div className="events">
      <h2 className="events-title">Iconic Quotes</h2>
      <p className="additional-info">"Socks are a culture. I am the sock woman. Whether you wear socks or not, walk around bare-legged; it doesn't concern me. I love socks. I've heard ladies say 'Good for you' because of the socks I wear in August. This is something else. For example, this is a rule in the royal family."</p>
      <p className="additional-info">"After the birth of my child, I swear, as a disciplined woman, who are you to judge me? Who are you?Let me give you a piece of advice, shame on you, go take care of your daughter first. Hopefully, may God not discipline you with your daughter. Hopefully, may God not discipline you with the wife you left behind."</p>
      <p className="additional-info">"I hate the sleeping man. A man gets up in the morning and goes to work. Why are you lying around? I don't like it. Get up and go, man."</p>
      <p className="additional-info">"No one can talk to me about this. Living perfectly, working in this country, trying to live like a queen by working like a dog, trying to provide the best for their child and family, paying taxes like a lion, making donations. What have you done, damn you? What have you done! Where were you and what have you done!"</p>
      <p className="additional-info">"To my twenty-year-old child, who are you? Are you capable of upsetting him? Would I even harm a hair on his head? Especially to a fool like you. Fool."</p>
      <p className="additional-info">"What do we have behind us! I have no one behind me, brother, no one. Come on, come on! I came to your house, had a coffee, and yet I kept quiet, you scum."</p>
      <ul className="events-list">
        {events.map((event, index) => (
          <li key={index} className="events-item">
            {event}
            <div className="event-icons">
              <FaEdit className="edit-icon" onClick={() => handleEditEvent(index)} />
              <FaTrashAlt className="delete-icon" onClick={() => handleDeleteEvent(index)} />
            </div>
          </li>
        ))}
      </ul>
      <div className="add-event">
        <input
          type="text"
          placeholder="Add an iconic quotes..."
          className="event-input"
          value={newEvent}
          onChange={(e) => setNewEvent(e.target.value)}
        />
        <button onClick={handleAddEvent} className="add-button">{editIndex !== null ? 'Update' : 'Add'}</button>
      </div>
    </div>
  );
}

export default Events;
