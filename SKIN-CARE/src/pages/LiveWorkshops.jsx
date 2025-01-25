import React, { useState, useEffect } from 'react';
import { Video } from 'lucide-react';

const LiveWorkshops = () => {
  const [workshops, setWorkshops] = useState([]);
  const [newWorkshop, setNewWorkshop] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
    image: null, // Store the image file
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/workshops')
      .then((response) => response.json())
      .then((data) => setWorkshops(data));
  }, []);

  const handleAddWorkshop = () => {
    const formData = new FormData();
    formData.append('title', newWorkshop.title);
    formData.append('date', newWorkshop.date);
    formData.append('time', newWorkshop.time);
    formData.append('description', newWorkshop.description);
    formData.append('image', newWorkshop.image); // Append the image file

    fetch('http://localhost:5000/api/workshops', {
      method: 'POST',
      body: formData, // Send FormData instead of JSON
    })
      .then((response) => response.json())
      .then((data) => {
        setWorkshops([...workshops, data]); // Add the new workshop to the list
        setNewWorkshop({ title: '', date: '', time: '', description: '', image: null }); // Reset the form
      })
      .catch((error) => {
        console.error('Error adding workshop:', error);
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
        <Video className="h-8 w-8 text-teal-600 mr-2" />
        Live Workshops
      </h1>

      {/* Add Workshop Form */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Add a New Workshop</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={newWorkshop.title}
            onChange={(e) => setNewWorkshop({ ...newWorkshop, title: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="date"
            value={newWorkshop.date}
            onChange={(e) => setNewWorkshop({ ...newWorkshop, date: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="time"
            value={newWorkshop.time}
            onChange={(e) => setNewWorkshop({ ...newWorkshop, time: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            placeholder="Description"
            value={newWorkshop.description}
            onChange={(e) => setNewWorkshop({ ...newWorkshop, description: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            rows="3"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewWorkshop({ ...newWorkshop, image: e.target.files[0] })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            onClick={handleAddWorkshop}
            className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Add Workshop
          </button>
        </div>
      </div>

      {/* Workshop List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshops.map((workshop) => (
          <div key={workshop._id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img
              src={`http://localhost:5000/uploads/${workshop.image}`} // Display the uploaded image
              alt={workshop.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{workshop.title}</h3>
              <p className="text-gray-600 mb-2">
                {workshop.date} at {workshop.time}
              </p>
              <p className="text-gray-600 mb-4">{workshop.description}</p>
              <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition focus:outline-none focus:ring-2 focus:ring-teal-500">
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