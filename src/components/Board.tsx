import React from "react";
import "../assets/board.css";
import Column from "./Column";
import type { ColumnProps } from "./Column";


const boardData:ColumnProps[] = [
  {
    title: "To Do",
    tasks: [
      { title: "Design login page", description: "Create UI for login", status: "todo" },
      { title: "Set up database", description: "MongoDB setup", status: "todo" },
    ],
  },
  {
    title: "In Progress",
    tasks: [
      { title: "API integration", description: "Connect frontend to backend", status: "inprogress" },
    ],
  },
  {
    title: "Done",
    tasks: [
      { title: "Project setup", description: "Initialized repo and dependencies", status: "done" },
    ],
  },
];

const Board = () => {
  return (
      <div className="kanban-board">
        {boardData.map((column, idx) => (
          <Column key={idx} title={column.title} tasks={column.tasks} />
        ))}
      </div>
  );
};
export default Board;