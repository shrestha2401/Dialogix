import React, {useState} from 'react';

interface ChatProps {
  message: string;
}

const Chat: React.FC<ChatProps> = ({ message }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    // Logic to send a message
    console.log('Sending message:', newMessage);
    setNewMessage(''); // Clear the input after sending the message
  };
  return (
    <div className="flex-1 p-4 flex justify-between flex-col">
      <div>
      <p className="text-lg font-semibold">Chatting Section</p>
      <div className="bg-white p-4 border border-gray-300 mt-4 rounded-full">
        <p className="text-gray-600">{message}</p>
      </div>
      </div>
      <div className="flex items-center relative">
      <input
          type="text"
          placeholder="Type a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="px-3 py-2 bg-white border border-gray-300 focus:outline-none focus:border-blue-500 w-full rounded-full h-14 pr-20"
        />
        <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 rounded-full absolute right-4 top-1/2 transform -translate-y-1/2">
        Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
