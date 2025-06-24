import React from 'react';

const JobListing = ({ job }) => {
  return (
    <div className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
        {job.company.charAt(0)}
      </div>
      <div className="flex-1">
        <div className="text-gray-400 text-sm">{job.company}</div>
        <div className="text-white font-medium">{job.title}</div>
      </div>
    </div>
  );
};

export default JobListing;