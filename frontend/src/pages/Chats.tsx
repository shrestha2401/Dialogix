import React from 'react';

interface ChatProps {
  message: string;
}

const Chat: React.FC<ChatProps> = ({ message }) => {
  return (
    <div className="flex-1 p-4">
      <p className="text-lg font-semibold">Chatting Section</p>
      <div className="bg-white p-4 border border-gray-300 rounded-full mt-4">
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default Chat;
