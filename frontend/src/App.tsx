// src/App.tsx
import React from 'react';
import ChatBar from './pages/try'
import Chat from './pages/Chats';

const App: React.FC = () => {
  return (
    <div className="flex justify-center  h-screen  rounded-md" style={{ backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/527/757/70/aesthetic-neon-wallpaper-preview.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="max-w-screen-xl w-full flex my-6 bg-opacity-50 bg-gray-800 rounded-lg">
      <ChatBar />
      <Chat />
    </div>
  </div>
  );
}

export default App;
