import "./style.css";
import "./dom.js";

document.getElementById("open-dialog-btn").addEventListener("click", () => {
  document.getElementById("task-dialog").showModal();
});
