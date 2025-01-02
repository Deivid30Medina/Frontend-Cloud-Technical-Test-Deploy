import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../hooks/useTasks";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description) {
      await addTask({ title, description });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="p-4 bg-color-font">
      <h1 className="text-4xl font-bold text-white text-center">
        Create a New Task
      </h1>
      <h4 className="text-lg text-white text-center mt-5">
        "Remember that all fields marked with * are mandatory."
      </h4>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title *"
          className="rounded-md p-2 w-full peer"
          required
          maxLength={100}
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="rounded-md p-2 w-full min-h-52"
          required
          placeholder="Description *"
          maxLength={255}
        ></textarea>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Create
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
