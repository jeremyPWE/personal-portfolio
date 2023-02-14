import { atom } from "recoil";

export const filtersAtom = atom({
  key: "filtersData",
  default: {
    search: "",
    sort: "relevancy",
    category: "Movies",
    currentPage: 1,
  },
});

export const viewAtom = atom({
  key: "viewAtom",
  default: {
    numCols: 1,
  },
});

export const imageAtom = atom({
  key: "imageData",
  default: false,
});
