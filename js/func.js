const collapsable = document.querySelectorAll(".collapsable");
collapsable.forEach((item) =>
item.addEventListener("click", function (){
    this.classList.toggle("collapsable--expanded");
})
);