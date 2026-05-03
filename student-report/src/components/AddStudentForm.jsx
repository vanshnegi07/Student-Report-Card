import { useState } from "react";

const AddStudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(name, score);
    setName("");
    setScore("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 justify-center mt-4">
      
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
      />

      <input
        type="number"
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
      />

      <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition">
        Add
      </button>

    </form>
  );
};

export default AddStudentForm;