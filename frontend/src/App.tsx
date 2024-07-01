import React, { useState } from 'react';
import Chat from './pages/home/Chats';
import ChatBar from './pages/home/ChatBar';
import SideBar from './pages/home/SideBar';
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
    <div className="flex justify-center h-screen rounded-md"
    style={{
      backgroundImage: `url('https://cdn.wallpapersafari.com/8/65/3JE9fy.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    >
      <div className="max-w-screen-xl w-full flex my-6 bg-gray-100 border border-gray-300 rounded-lg opacity-90">
        <SideBar/>
        <ChatBar chatLists={chatLists} onChatItemClick={handleChatItemClick} />
        <Chat message={currentChat} />

      </div>
    </div>
  );
};

export default App;
