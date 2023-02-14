import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import useTasks from "../../hooks/useTask";
import dynamic from "next/dynamic";
import Section from "../Section";

const Delete = dynamic(() => import("./Delete"), { ssr: false });
const Board = dynamic(() => import("./Board"), { ssr: false });

const Boards = () => {
  const { updateTask, deleteTask } = useTasks();

  const handleDragEnd = (result) => {
    const { destination, source } = result;

    if (destination && destination.droppableId === "delete") {
      deleteTask(source);
    } else {
      updateTask(destination, source);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Section>
        <Delete />
      </Section>
      <Section className="w-full overflow-x-auto overflow-y-hidden">
        <div className="flex w-full justify-between gap-x-[20px]">
          <Board statusType="todo" />
          <Board statusType="ongoing" />
          <Board statusType="completed" />
          <div className="w-[30px] md:hidden flex">.</div>
        </div>
      </Section>
    </DragDropContext>
  );
};

export default Boards;
