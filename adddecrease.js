addBtn = document.getElementById("add");
//number = document.getElementById("show");
subtrat = document.getElementById("minus");
remove = document.getElementById("clear");

//function increaseCount() {
// let count = 4;
// return count;}
let count = 0;
addBtn.addEventListener("click", () => {
  count++;
  document.getElementById("show").innerText = count;
});

subtrat.addEventListener("click", () => {
  count--;
  document.getElementById("show").innerText = count;
});

remove.addEventListener("click", () => {
  count = 0;
  document.getElementById("show").innerText = count;
});
