import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const Bootcamps = () => {
  const [bootcamps, setBootcamps] = useState([]);
  const [newBootcamp, setNewBootcamp] = useState({
    title: '',
    date: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/bootcamps')
      .then((response) => response.json())
      .then((data) => setBootcamps(data));
  }, []);

  const handleAddBootcamp = () => {
    fetch('http://localhost:5000/api/bootcamps', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBootcamp),
    })
      .then((response) => response.json())
      .then((data) => {
        setBootcamps([...bootcamps, data]);
        setNewBootcamp({ title: '', date: '', description: '', image: '' });
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
        <Calendar className="h-8 w-8 text-teal-600 mr-2" />
        Bootcamps
      </h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add a New Bootcamp</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Title"
            value={newBootcamp.title}
            onChange={(e) => setNewBootcamp({ ...newBootcamp, title: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <input
            type="date"
            value={newBootcamp.date}
            onChange={(e) => setNewBootcamp({ ...newBootcamp, date: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Description"
            value={newBootcamp.description}
            onChange={(e) => setNewBootcamp({ ...newBootcamp, description: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newBootcamp.image}
            onChange={(e) => setNewBootcamp({ ...newBootcamp, image: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <button
            onClick={handleAddBootcamp}
            className="bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
          >
            Add Bootcamp
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bootcamps.map((bootcamp) => (
          <div key={bootcamp._id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img
              src={bootcamp.image}
              alt={bootcamp.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{bootcamp.title}</h3>
              <p className="text-gray-600 mb-2">{bootcamp.date}</p>
              <p className="text-gray-600 mb-4">{bootcamp.description}</p>
              <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bootcamps;