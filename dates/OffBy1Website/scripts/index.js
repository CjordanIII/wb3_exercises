console.log("hello world");

const date = document.querySelector("#theDate");
const btn = document.querySelector("#theButton");
const p = document.querySelector("#theParagraph");

btn.addEventListener("click", () => {
  p.textContent = new Date(date.value).toLocaleString();
});
