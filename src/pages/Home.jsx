import {useLoaderData } from 'react-router';
import Challenge from '../components/challenge';

const Home = () => {
    const challenges=useLoaderData();
    return (
    <>
  
    <div className="grid grid-cols-3 gap-3">
        {challenges.map((challenge) => (
          <Challenge key={challenge._id} challenge={challenge} />
        ))}
      </div>
      <div className="p-8 space-y-12 bg-gray-100">
  <div className="text-center">
    <h2 className="text-3xl font-semibold mb-4">Why Go Green?</h2>
    <ul className="list-disc space-y-2 text-left max-w-md mx-auto">
      <li>Reduces environmental pollution</li>
      <li>Conserves natural resources</li>
      <li>Promotes healthier living</li>
      <li>Saves energy and reduces costs</li>
      <li>Supports biodiversity and wildlife</li>
    </ul>
  </div>
  <div className="text-center">
    <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-3xl mx-auto">
      <div className="bg-white p-6 rounded shadow-md w-64">
        <h3 className="font-bold mb-2">Step 1</h3>
        <p>Join a challenge</p>
      </div>
      <div className="bg-white p-6 rounded shadow-md w-64">
        <h3 className="font-bold mb-2">Step 2</h3>
        <p>Track progress</p>
      </div>
      <div className="bg-white p-6 rounded shadow-md w-64">
        <h3 className="font-bold mb-2">Step 3</h3>
        <p>Share tips</p>
      </div>
    </div>
  </div>

</div>

      </>
        
    );
};

export default Home;