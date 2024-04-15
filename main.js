const button = document.querySelector("#button");
const content = document.querySelector("#content");

button.addEventListener("click", function () {
     
  content.classList.toggle("content-hidden");

  if (content.classList.contains("content-hidden")) {
    button.textContent = "Открыть инфу";
  } 
  else {
    button.textContent = "Закрыть инфу";
  }
});
