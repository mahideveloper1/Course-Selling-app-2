import { atom } from "recoil";

export const homeState = atom({
  key: "homeState",
  default: {
    isUser: false,
    isAdmin: false,
  },
});
