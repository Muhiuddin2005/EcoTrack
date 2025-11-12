import { use, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";



const ChallengeDetails = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [challenge, setChallenge] = useState({});
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);


  useEffect(() => {
    fetch(`https://ass-10-sigma.vercel.app/challenges/${id}`, {

    })
      .then((res) => res.json())
      .then((data) => {
        setChallenge(data.result);
        setLoading(false);
      });
  }, [user, id, refetch]);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://ass-10-sigma.vercel.app/challenges/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate('/');

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((e) => {
            toast(e)
          });
      }
    });
  };

  const handleParticipate = () => {
    const Challenge = {
      participatedBy: user.email,
      status: "Ongoing",
      progress: 0,
      joinDate: new Date(),
    };

    fetch(`https://ass-10-sigma.vercel.app/participants/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Challenge),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully Participated!");
        setRefetch(!refetch)

      })
      .catch((e) => {
        toast(e)
      });
  };


  if (loading) {
    return <div>Please wait!Loading...</div>;
  }

  return (
    <div>
      Part: {challenge.participants}
      <Link
        to={`/update-challenge/${challenge._id}`}

      >
        Update Challenge
      </Link>
      <button
        onClick={handleDelete}
      >
        Delete
      </button>
      <button
        onClick={handleParticipate}
      >
        Participate
      </button>

    </div>
  );
};

export default ChallengeDetails;