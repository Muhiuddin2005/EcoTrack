import { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

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
    return <div> Please wait!Loading...</div>;
  }

  return (
    <div>
       {challenge.length}
      </div>
  );
};

export default MyParticipations;