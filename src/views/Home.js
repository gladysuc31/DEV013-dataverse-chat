import { navigateTo } from "../router.js";

export const Home = () => {
  const viewEl = document.createElement("div");
  viewEl.innerHTML = "I'm the Home Page";
  return viewEl;
};