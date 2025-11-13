import { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { BounceLoader } from "react-spinners";

const myAddedChallenges = () => {
  const { user } = use(AuthContext)
  const [loading, setLoading] = useState(true)
  const [challenges, setChallenges] = useState([])


  useEffect(() => {

    fetch(`https://ass-10-sigma.vercel.app/my-added-challenges?email=${user.email}`, {
    })
      .then(res => res.json())
      .then(data => {
        setChallenges(data)
        setLoading(false)
      })

  }, [user])

  if (loading) {
    return  <div className="min-h-screen flex items-center justify-center">
        <BounceLoader
  color="#0ff051"
  size={200}
  speedMultiplier={3}
/>
      </div>
  }
  return (
    <div>
      <div className="grid grid-cols-2">
        {challenges.map((challenge) => (
          <div key={challenge._id}>
            {challenge.description}
          </div>
        ))}
      </div>
      </div>
  );
};

export default myAddedChallenges;