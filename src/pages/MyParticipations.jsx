import { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { BounceLoader } from "react-spinners";
const MyParticipations = () => {
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(true);
  const [challenge, setChallenge] = useState([]);

  useEffect(() => {
    if (user && user.email) {
      fetch(`https://ass-10-sigma.vercel.app/participants?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setChallenge(data);
          setLoading(false);
        })
        .catch((e) => toast(e));
    }
  }, [user]);

  if (loading) {
    return  <div className="min-h-screen flex items-center justify-center">
        <BounceLoader
  color="#0ff051"
  size={200}
  speedMultiplier={3}
/>
      </div>;
  }

  return (
    <div>
       {challenge.length}
      </div>
  );
};

export default MyParticipations;