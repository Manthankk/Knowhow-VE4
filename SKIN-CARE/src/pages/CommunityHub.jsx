import React from 'react';
import { Calendar, MessageCircle, Video, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 

const events = [
  {
    id: 1,
    title: 'Ayurvedic Cooking Workshop',
    date: '2024-03-25',
    time: '10:00 AM',
    type: 'workshop',
    image: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 2,
    title: 'Skin Care Discussion',
    date: '2024-03-27',
    time: '2:00 PM',
    type: 'forum',
    image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 3,
    title: 'Meditation Bootcamp',
    date: '2024-03-30',
    time: '9:00 AM',
    type: 'bootcamp',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=300&q=80',
  },
];

const CommunityHub = () => {
  const navigate = useNavigate(); 

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Community Hub</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
          onClick={() => handleNavigation('/live-workshops')} 
        >
          <Video className="h-8 w-8 text-teal-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Live Workshops</h3>
          <p className="text-gray-600">Join interactive sessions with experts</p>
        </div>

        <div
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
          onClick={() => handleNavigation('/discussion-forum')} 
        >
          <MessageCircle className="h-8 w-8 text-teal-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Discussion Forums</h3>
          <p className="text-gray-600">Share experiences and get advice</p>
        </div>

        <div
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
          onClick={() => handleNavigation('/meetup')} 
        >
          <Users className="h-8 w-8 text-teal-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Meetup Events</h3>
          <p className="text-gray-600">Connect with local community</p>
        </div>

        <div
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
          onClick={() => handleNavigation('/bootcamps')} 
        >
          <Calendar className="h-8 w-8 text-teal-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Bootcamps</h3>
          <p className="text-gray-600">Intensive wellness programs</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Upcoming Events</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-sm text-teal-600 font-semibold uppercase">{event.type}</span>
              <h3 className="text-lg font-semibold my-2">{event.title}</h3>
              <p className="text-gray-600">
                {event.date} at {event.time}
              </p>
              <button className="mt-4 w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition">
                Join Event
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityHub;