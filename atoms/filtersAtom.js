import { atom } from "recoil";
import { v4 as uuid } from "uuid";

export const filtersAtom = atom({
  key: uuid(),
  default: {
    search: "",
    sort: "relevancy",
    category: "Movies",
    currentPage: 1,
    pageSize: 15,
  },
});

export const viewAtom = atom({
  key: uuid(),
  default: {
    numCols: 1,
  },
});

export const imageAtom = atom({
  key: uuid(),
  default: false,
});
