import React, { useState } from 'react';
import Chat from './pages/Chats';
import ChatBar from './pages/try';
import SideBar from './pages/SideBar';
const App: React.FC = () => {
  // State to hold the current chat message
  const [currentChat, setCurrentChat] = useState<string>('Click on a Chat to Start Messaging');

  // Function to handle chat list item click
  const handleChatItemClick = (chatMessage: string) => {
    setCurrentChat(chatMessage);
  };

  // Example chat lists
  const chatLists: string[] = [
    'Hello! How are you?',
    'Are we meeting today?',
    'Don’t forget to send the report.',
    'Happy Birthday!',
    'Good night!'
  ];

  return (
    <div className="flex justify-center h-screen rounded-md">
      <div className="max-w-screen-xl w-full flex my-6 bg-gray-100 border border-gray-300 rounded-lg">
        <SideBar/>
        <ChatBar chatLists={chatLists} onChatItemClick={handleChatItemClick} />
        <Chat message={currentChat} />

      </div>
    </div>
  );
};

export default App;
