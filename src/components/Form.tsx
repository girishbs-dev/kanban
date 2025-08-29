import React, { useState } from "react";
import "../assets/form.css";

interface TaskFormProps {
  onCreate: (task: { title: string; description: string; status: string }) => void;
}

const Form: React.FC<TaskFormProps> = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onCreate({ title, description, status });
    setTitle("");
    setDescription("");
    setStatus("todo");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="task-title" className="form-label">Title:</label>
        <input
          id="task-title"
          className="form-input"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="task-desc" className="form-label">Description:</label>
        <input
          id="task-desc"
          className="form-input"
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="task-status" className="form-label">Status:</label>
        <select
          id="task-status"
          className="form-select"
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <button className="form-btn" type="submit">Create Task</button>
    </form>
  );
};

export default Form;