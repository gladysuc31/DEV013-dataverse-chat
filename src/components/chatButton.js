import { navigateTo } from "../router.js";

export const chatButton = () => {
    const chatButton = document.createElement("button");
    chatButton.classList.add("chatButton");

    const buttonChat = document.querySelector(".chatButton");
    buttonChat.addEventListener("click", () => {
        navigateTo("/chat", {name: pelicula.name, id: pelicula.id})
    })
}