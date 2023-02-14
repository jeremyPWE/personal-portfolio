import { v4 as uuid } from "uuid";

const taskReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TASK":
      return {
        ...state,
        [payload.statusType]: [
          ...state[payload.statusType],
          {
            id: uuid(),
            title: payload.newTask,
          },
        ],
      };
    case "UPDATE_TASK":
      if (payload.destination === null) {
        return state;
      } else {
        const statusFrom = payload.source.droppableId;
        const indexFrom = payload.source.index;
        const statusTo = payload.destination.droppableId;
        const indexTo = payload.destination.index;

        const task = state[statusFrom][indexFrom];

        const from = Array.from(state[statusFrom]);
        from.splice(indexFrom, 1);

        const to =
          statusFrom === statusTo
            ? Array.from(from)
            : Array.from(state[statusTo]);
        to.splice(indexTo, 0, task);

        return {
          ...state,
          [statusFrom]: from,
          [statusTo]: to,
        };
      }
    case "DELETE_TASK":
      const statusFrom = payload.droppableId;
      const indexFrom = payload.index;

      const from = Array.from(state[statusFrom]);
      from.splice(indexFrom, 1);

      return { ...state, [statusFrom]: from };
    default:
      throw new Error(`Unknown action type ${type}`);
  }
};

export default taskReducer;
