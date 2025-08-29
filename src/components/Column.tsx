import React from "react";
import "../assets/column.css";
import Task from "./Task";

interface TaskType {
  title: string;
  description?: string;
  status: "todo" | "inprogress" | "done";
}

export interface ColumnProps {
  title: string;
  tasks: TaskType[];
}

const Column: React.FC<ColumnProps> = ({ title, tasks }) => {
  return (
    <div className="kanban-column">
      <div className="column-header">
        <h2 className="column-title">{title}</h2>
        <span className="column-count">{tasks.length}</span>
      </div>
      <div className="column-tasks">
        {tasks.map((task, idx) => (
          <Task
            key={idx}
            title={task.title}
            description={task.description}
            status={task.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;