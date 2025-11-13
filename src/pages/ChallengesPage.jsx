import React from 'react';
import { useLoaderData } from 'react-router';
import Challenge from '../components/challenge';
import SkeletonChallengeCard from '../components/SkeletonChallengeCard';


const ChallengesPage = () => {
    const challenges=useLoaderData();
    return (
    <>
  
    <div className="grid grid-cols-3 gap-3">
        {challenges.length > 0
        ? challenges.map((challenge) => (
            <Challenge key={challenge._id} challenge={challenge} />
          ))
        :
          Array.from({ length: 4 }).map((index) => (
            <SkeletonChallengeCard key={index} />
          ))}
      </div>
      </>
        
    );
};

export default ChallengesPage;