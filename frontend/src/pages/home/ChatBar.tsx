import React from 'react';

interface ChatBarProps {
  chatLists: string[];
  onChatItemClick: (chatMessage: string) => void;
}

const ChatBar: React.FC<ChatBarProps> = ({ chatLists, onChatItemClick }) => {
  return (
    <div className="w-80 bg-gray-100 border-r border-gray-300 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold mb-2 text-center">Dialogix</h3>
        <input
          type="text"
          placeholder="Search for a chat"
          className="px-3 py-2 bg-white rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 ml-9 text-center "
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul>
          {chatLists.map((chat, index) => (
            <li
              key={index}
              className="p-4 border-b border-gray-200 last:border-none cursor-pointer"
              onClick={() => onChatItemClick(chat)}
            >
              <div className="flex items-center">
                <img
                  src={`https://w7.pngwing.com/pngs/589/83/png-transparent-account-avatar-contact-people-profile-user-basic-icon.png`}
                  alt={`User${index + 1}`}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="text-sm font-medium">Username</p>
                  <p className="text-sm text-gray-600">{chat}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatBar;
