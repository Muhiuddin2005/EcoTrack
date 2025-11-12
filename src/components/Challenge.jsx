import React from 'react';
import { Link } from 'react-router';

const Challenge = ({ challenge }) => {
    
  return (
    <div className="p-3">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="bg-white rounded-lg shadow-md flex flex-col"
          >
            <div className="p-4 flex flex-col">
              <h2 className="text-lg font-semibold mb-1">{challenge.title}</h2>
              <p className="text-sm text-gray-500 mb-2">Category: {challenge.category}</p>
              <p className="text-gray-700 mb-2">{challenge.description}</p>
              <p className="text-gray-600 mb-1">Duration: {challenge.duration} days</p>
              <p className="text-gray-600 mb-4">Participants: {challenge.participants}</p>
              <Link
            to={`/challenge-details/${challenge._id}`}
            className="btn rounded-full hover:from-teal-600 hover:to-green-600"
          >
            View Details
          </Link>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Challenge;
