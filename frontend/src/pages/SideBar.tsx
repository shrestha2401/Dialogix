import React from 'react';
// import './ChatBar.css'

const recentChats = [
  'Happy Birthday!',
  'Good night!'
];

const SideBar = () => {
  return (
    <div className="h-full w-20  bg-gray-100 border-r border-gray-300 flex flex-col rounded-md bg-opacity-75 flex-none">
      <div className="p-4 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center mb-2">
        <img
      src={`https://w7.pngwing.com/pngs/589/83/png-transparent-account-avatar-contact-people-profile-user-basic-icon.png`}
      className="w-10 h-10 rounded-full mr-4"
      alt="Avatar"
        />
        {/* <h3 className="text-lg font-semibold mb-2">Krishna Agrawal</h3> */}
   </div>
  {/* <img
    src={`https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-vector-plus-icon-png-image_515260.jpg`}
    className="w-8 h-8 rounded-full mb-2"
    alt="Icon"
  /> */}
        </div>

        {/* <input
          type="text"
          placeholder="Search"
          className="px-3 py-2 bg-white rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
        /> */}
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul>
          
            <li className="p-4 border-b border-gray-200 last:border-none">
              <div className="flex items-center flex-col ml-2">
                <img
                  src={`https://cdn-icons-png.flaticon.com/512/6469/6469169.png`}
                
                  className="w-10 h-10 rounded-full mr-4"
                />
                <img
                  src={`https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-bell-icon-png-image_927119.jpg`}
                
                  className="w-10 h-10 rounded-full mr-4 mt-2"
                />
                <img
                  src={`https://upload.wikimedia.org/wikipedia/commons/d/de/Gear-icon.png`}
                
                  className="w-10 h-10 rounded-full mr-4 mt-2"
                />
                <div>
                  {/* <p className="text-sm font-medium">Username</p>
                  <p className="text-sm text-gray-600">{chat}</p> */}
                </div>
              </div>
            </li>
          
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
