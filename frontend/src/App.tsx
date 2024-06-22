// src/App.tsx
import React from 'react';
import Fn from './pages/try'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Fn/>
      <h1 className="text-4xl font-bold text-blue-500">
        Hello, Tailwind with Vite + React!
      </h1>
    </div>
  );
}

export default App;
