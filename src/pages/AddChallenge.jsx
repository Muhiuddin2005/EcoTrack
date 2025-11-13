import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const AddChallenge = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.title.value,
      category: e.target.category.value,
      description: e.target.description.value,
      duration: parseInt(e.target.duration.value),
      target: e.target.target.value,
      participants: 0,
      impactMetric: e.target.impactMetric.value,
      createdBy: user.email,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      imageUrl: e.target.imageUrl.value,
    };

    fetch("https://ass-10-sigma.vercel.app/challenges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Challenge added!");
        console.log(data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-3"
      >
        <h2 className="text-center text-xl font-semibold mb-4">
          Add New Challenge
        </h2>

        <input
          type="text"
          name="title"
          className="w-full border p-2 rounded-md"
          placeholder="title: Local Wildlife Protection"
          required
        />

        <input
          type="text"
          name="category"
          className="w-full border p-2 rounded-md"
          placeholder="category: Conservation"
          required
        />

        <textarea
          name="description"
          rows="3"
          className="w-full border p-2 rounded-md"
          placeholder="description: Protect and monitor local wildlife habitats."
          required
        ></textarea>

        <input
          type="number"
          name="duration"
          className="w-full border p-2 rounded-md"
          placeholder="duration: 40"
          required
        />

        <input
          type="text"
          name="target"
          className="w-full border p-2 rounded-md"
          placeholder="target: Increase wildlife sightings"
          required
        />

        <input
          type="text"
          name="impactMetric"
          className="w-full border p-2 rounded-md"
          placeholder="impactMetric: number of species protected"
          required
        />

        <input
          type="date"
          name="startDate"
          className="w-full border p-2 rounded-md"
          placeholder="startDate: 2024-06-01"
          required
        />

        <input
          type="date"
          name="endDate"
          className="w-full border p-2 rounded-md"
          placeholder="endDate: 2024-07-10"
          required
        />

        <input
          type="url"
          name="imageUrl"
          className="w-full border p-2 rounded-md"
          placeholder="imageUrl: https://i.ibb.co/xD9f6Zq/wildlife.jpg"
          required
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md"
        >
          Add Challenge
        </button>
      </form>
    </div>
  );
};

export default AddChallenge;
