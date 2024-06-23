import React from 'react';

interface ChatProps {
  message: string;
}

const Chat: React.FC<ChatProps> = ({ message }) => {
  return (
    <div className="flex-1 p-4 flex justify-between flex-col">
      <div>
      <p className="text-lg font-semibold">Chatting Section</p>
      <div className="bg-white p-4 border border-gray-300 mt-4 rounded-full">
        <p className="text-gray-600">{message}</p>
      </div>
      </div>
      <div>
      <input
          type="text"
          placeholder="Type a message"
          className="px-3 py-2 bg-white border border-gray-300 focus:outline-none focus:border-blue-500 w-full rounded-full h-14"
        />
      </div>
    </div>
  );
};

export default Chat;
