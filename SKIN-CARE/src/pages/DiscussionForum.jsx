import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';

const DiscussionForum = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/messages')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch messages');
        }
        return response.json();
      })
      .then((data) => {
        setMessages(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const sendMessage = () => {
    const trimmedMessage = newMessage.trim();
    if (!trimmedMessage) return;

    const message = { text: trimmedMessage, user: 'You' };
    fetch('http://localhost:5000/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to send message');
        }
        return response.json();
      })
      .then((data) => {
        setMessages([...messages, data]);
        setNewMessage('');
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
        <MessageCircle className="h-8 w-8 text-teal-600 mr-2" />
        Discussion Forum
      </h1>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="h-96 overflow-y-auto mb-4">
          {isLoading ? (
            <p className="text-gray-600">Loading messages...</p>
          ) : (
            messages.map((msg, index) => (
              <div key={index} className="mb-2">
                <span className="font-semibold text-teal-600">{msg.user}: </span>
                <span className="text-gray-800">{msg.text}</span>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
            placeholder="Type your message..."
          />
          <button
            onClick={sendMessage}
            aria-label="Send message"
            className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscussionForum;