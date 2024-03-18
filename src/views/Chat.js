import { navigateTo } from "../router.js";

export const Chat = () => {
  const viewEl = document.createElement("div");
  viewEl.innerHTML = "I'm the Chat Page";
  return viewEl;
};