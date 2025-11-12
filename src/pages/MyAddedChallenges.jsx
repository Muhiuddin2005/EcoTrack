import { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

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
    return <div> Please wait!Loading...</div>
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