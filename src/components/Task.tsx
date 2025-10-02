import React from "react";
import "../assets/task.css";

interface TaskProps {
  title: string;
  description?: string;
  status: "todo" | "inprogress" | "done";
  onClick?: () => void;
}

const Task = ({ title, description, status, onClick }) => {
    const statusMapping = {
    "todo": "To Do",
    "inprogress": "In Progress",
    "done": "Done",
    };
  return (
    <div className="task-card" onClick={onClick}>
      <div className="task-header">
        <h3 className="task-title">{title}</h3>
        {status && <span className={`task-status ${status}`}>{statusMapping[status]}</span>}
      </div>
      {description && <p className="task-desc">{description}</p>}
    </div>
  );
};

export default Task;