import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";

const UpdateChallenge = () => {
  const data = useLoaderData();
  const challenge = data.result;
  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      description: e.target.description.value,
    };
    fetch(`https://ass-10-sigma.vercel.app/challenges/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully updated!");
      })
      .catch((err) => {
        toast(err);
      });
  };

  return (
    <div className="card bg-base-100">
      <p className="text-center mb-5">Update challenge</p>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label className="label">Description</label>
          <textarea
            name="description"
            defaultValue={challenge.description}
            required
            rows="3"
            className="w-full textarea rounded-3xl"
            placeholder="Enter description"
          ></textarea>
        </div>
        <button type="submit" className="btn w-full">
          Update challenge
        </button>
      </form>
    </div>
  );
};

export default UpdateChallenge;
