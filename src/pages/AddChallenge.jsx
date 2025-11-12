import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const AddChallenge = () => {
  const { user } = use(AuthContext);

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
        toast.error(err);
      });
  };

  return (
    <div>
  <div>
    <div>
      <h2>Add New Challenge</h2>
      <form onSubmit={handleSubmit}>

        <div>
          <label>Impact Metric</label>
          <input
            type="text"
            name="impactMetric"
            required
            placeholder="e.g. kg plastic saved"
          />
        </div>

        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            required
            placeholder="e.g. Plastic-Free July"
          />
        </div>

        <div>
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            required
          />
        </div>

        <div>
          <label>Category</label>
          <input
            type="text"
            name="category"
            required
            placeholder="e.g. Waste Reduction"
          />
        </div>

        <div>
          <label>Target</label>
          <input
            type="text"
            name="target"
            required
            placeholder="e.g. Reduce plastic waste"
          />
        </div>

        <div>
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            required
          />
        </div>

        <div>
          <label>Duration (in days)</label>
          <input
            type="number"
            name="duration"
            required
            placeholder="e.g. 30"
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            name="description"
            required
            rows="3"
            placeholder="Enter a short description"
          ></textarea>
        </div>

        <div>
          <label>Image URL</label>
          <input
            type="url"
            name="imageUrl"
            required
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <button type="submit">
          Add Challenge
        </button>

      </form>
    </div>
  </div>
</div>

  );
};

export default AddChallenge;
