function submit() {
  console.log(">>>");
  document.querySelector(".submit").addEventListener("click", function () {
    var box2 = document.querySelector(".box2");
    var box3 = document.querySelector(".box3");

    box2.classList.toggle("rotate-90");
    box3.classList.toggle("rotate-360");
  });
}
