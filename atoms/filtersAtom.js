import { faGaugeSimpleMed } from "@fortawesome/free-solid-svg-icons";
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

export const imageAtom = atom({
  key: "imageData",
  default: false,
});
