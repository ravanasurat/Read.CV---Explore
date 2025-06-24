import React from 'react';
import { FileText,Users,Search,Send,Rss,Globe,Bookmark} from 'lucide-react';

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    { icon: FileText, name: 'Explore', active: true },
    { icon: Users, name: 'Profile' },
    { icon: Search, name: 'Search' },
    { icon: Send, name: 'Replies' },
    { icon: Rss, name: 'Following' },
    { icon: Globe, name: 'Sites' },
  ];

  const bottomItems = [
    { icon: Bookmark, name: 'Posts' },
  ];

  return (
    <aside className={`
      fixed left-0 top-16 h-[calc(100vh-4rem)] bg-gray-900 text-white w-16 z-40 transition-transform duration-300 border-r border-gray-800
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      <div className="flex flex-col h-full">
        <div className="flex flex-col items-center py-6 space-y-6">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <button
                className={`
                  p-3 rounded-lg transition-colors duration-200 relative
                  ${item.active 
                    ? 'bg-gray-800 text-white' 
                    : 'text-gray-500 hover:text-white hover:bg-gray-800'
                  }
                `}
              >
                <item.icon size={20} strokeWidth={1.5} />
              </button>
              <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 
                            bg-gray-800 text-white text-sm px-3 py-2 rounded-lg
                            opacity-0 group-hover:opacity-100 group-focus:opacity-100
                            transition-opacity duration-200 pointer-events-none
                            whitespace-nowrap z-50 border border-gray-700 shadow-lg">
                {item.name}
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 
                              w-0 h-0 border-t-4 border-b-4 border-r-4 
                              border-transparent border-r-gray-800"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center pb-6 mt-auto">
          {bottomItems.map((item, index) => (
            <div key={index} className="relative group">
              <button
                className="p-3 rounded-lg transition-colors duration-200 text-gray-500 hover:text-white hover:bg-gray-800"
              >
                <item.icon size={20} strokeWidth={1.5} />
              </button>
              
              <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 
                            bg-gray-800 text-white text-sm px-3 py-2 rounded-lg
                            opacity-0 group-hover:opacity-100 group-focus:opacity-100
                            transition-opacity duration-200 pointer-events-none
                            whitespace-nowrap z-50 border border-gray-700 shadow-lg">
                {item.name}
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 
                              w-0 h-0 border-t-4 border-b-4 border-r-4 
                              border-transparent border-r-gray-800"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;