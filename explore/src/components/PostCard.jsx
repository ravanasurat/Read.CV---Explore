import React from 'react';
import { MessageCircle, Repeat, Heart, ExternalLink } from 'lucide-react';

const PostCard = ({ post, className = "" }) => {
  return (
    <div className={`bg-gray-800 rounded-xl p-4 ${className}`}>
      <div className="flex items-start gap-3 mb-4">
        <img 
          src={post.avatar} 
          alt={post.author}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">{post.author}</span>
            {post.verified && <span className="text-yellow-400"></span>}
          </div>
          <p className="text-gray-300 text-sm mt-1">{post.content}</p>
          {post.link && (
            <a 
              href={post.link} 
              className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 mt-2"
            >
              {post.link}
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>

      {post.image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img 
            src={post.image} 
            alt="Post content" 
            className="w-full h-64 object-cover"
          />
        </div>
      )}

      {post.tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
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
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 hover:text-white">
            <MessageCircle size={16} />
            <span className="text-sm">{post.comments || 1}</span>
          </button>
          <button className="flex items-center gap-1 hover:text-white">
            <Repeat size={16} />
            <span className="text-sm">{post.reposts || 4}</span>
          </button>
          <button className="flex items-center gap-1 hover:text-red-400">
            <Heart size={16} />
            <span className="text-sm">{post.likes || 21}</span>
          </button>
        </div>
      </div>

      {post.showReply && (
        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Reply directly..."
              className="flex-1 bg-gray-700 text-white placeholder-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="text-yellow-400 hover:text-yellow-300">
            
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;