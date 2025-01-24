import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

const MeetupEvents = () => {
  const [meetups, setMeetups] = useState([]);
  const [newMeetup, setNewMeetup] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    image: '',
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/meetups')
      .then((response) => response.json())
      .then((data) => setMeetups(data));
  }, []);

  const handleAddMeetup = () => {
    fetch('http://localhost:5000/api/meetups', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMeetup),
    })
      .then((response) => response.json())
      .then((data) => {
        setMeetups([...meetups, data]);
        setNewMeetup({ title: '', date: '', time: '', location: '', image: '' });
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
        <Users className="h-8 w-8 text-teal-600 mr-2" />
        Meetup Events
      </h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add a New Meetup</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Title"
            value={newMeetup.title}
            onChange={(e) => setNewMeetup({ ...newMeetup, title: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <input
            type="date"
            value={newMeetup.date}
            onChange={(e) => setNewMeetup({ ...newMeetup, date: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <input
            type="time"
            value={newMeetup.time}
            onChange={(e) => setNewMeetup({ ...newMeetup, time: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Location"
            value={newMeetup.location}
            onChange={(e) => setNewMeetup({ ...newMeetup, location: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newMeetup.image}
            onChange={(e) => setNewMeetup({ ...newMeetup, image: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <button
            onClick={handleAddMeetup}
            className="bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
          >
            Add Meetup
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meetups.map((meetup) => (
          <div key={meetup._id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img
              src={meetup.image}
              alt={meetup.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{meetup.title}</h3>
              <p className="text-gray-600 mb-2">
                {meetup.date} at {meetup.time}
              </p>
              <p className="text-gray-600 mb-4">{meetup.location}</p>
              <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition">
                RSVP
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetupEvents;