import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-4 mb-4">
      <div className="flex items-start gap-3 mb-4">
        <img 
          src={project.avatar} 
          alt={project.author}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="text-white font-medium">{project.author}</div>
          <div className="text-gray-400 text-sm">{project.title}</div>
          <div className="text-gray-300 text-sm mt-1">{project.description}</div>
        </div>
      </div>

      {project.image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 object-cover"
          />
        </div>
      )}

      {project.tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-gray-400 text-sm hover:text-white cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between text-gray-400">
        <div className="flex items-center gap-2">
          <span className="text-sm">{project.company}</span>
        </div>
        <div className="flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Reply directly..."
            className="bg-gray-700 text-white placeholder-gray-400 px-3 py-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="text-yellow-400 hover:text-yellow-300">
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;