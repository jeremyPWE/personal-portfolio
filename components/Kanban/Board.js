import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import useTasks from "../../hooks/useTask";
import Card from "./Card";

const status = {
  todo: {
    text: "TO-DO",
  },
  ongoing: {
    text: "IN-PROGRESS",
  },
  completed: {
    text: "COMPLETED",
  },
};

const Board = ({ statusType }) => {
  const { state } = useTasks();

  const tasks = state[statusType];

  return (
    <div className="w-full mb-4 p-4 bg-[#191A20] rounded-md">
      <div className="flex items-center justify-between mb-2">
        <h1 className="2xl:text-[28px]">{status[statusType].text}</h1>
      </div>
      <Droppable droppableId={statusType}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="h-full"
          >
            {tasks.map((task, index) => {
              return (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => {
                    return (
                      <div
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        className="mb-2"
                      >
                        <Card
                          title={task.title}
                          status={statusType}
                          {...provided.dragHandleProps}
                        />
                      </div>
                    );
                  }}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Board;
