import React, { useState, useEffect } from 'react';
import { Video } from 'lucide-react';

const LiveWorkshops = () => {
  const [workshops, setWorkshops] = useState([]);
  const [newWorkshop, setNewWorkshop] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/workshops')
      .then((response) => response.json())
      .then((data) => setWorkshops(data));
  }, []);

  const handleAddWorkshop = () => {
    fetch('http://localhost:5000/api/workshops', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newWorkshop),
    })
      .then((response) => response.json())
      .then((data) => {
        setWorkshops([...workshops, data]);
        setNewWorkshop({ title: '', date: '', time: '', description: '', image: '' });
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
        <Video className="h-8 w-8 text-teal-600 mr-2" />
        Live Workshops
      </h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add a New Workshop</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Title"
            value={newWorkshop.title}
            onChange={(e) => setNewWorkshop({ ...newWorkshop, title: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <input
            type="date"
            value={newWorkshop.date}
            onChange={(e) => setNewWorkshop({ ...newWorkshop, date: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <input
            type="time"
            value={newWorkshop.time}
            onChange={(e) => setNewWorkshop({ ...newWorkshop, time: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Description"
            value={newWorkshop.description}
            onChange={(e) => setNewWorkshop({ ...newWorkshop, description: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newWorkshop.image}
            onChange={(e) => setNewWorkshop({ ...newWorkshop, image: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <button
            onClick={handleAddWorkshop}
            className="bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
          >
            Add Workshop
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshops.map((workshop) => (
          <div key={workshop._id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img
              src={workshop.image}
              alt={workshop.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{workshop.title}</h3>
              <p className="text-gray-600 mb-2">
                {workshop.date} at {workshop.time}
              </p>
              <p className="text-gray-600 mb-4">{workshop.description}</p>
              <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition">
                Join Workshop
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveWorkshops;