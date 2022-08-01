let Bg = document.getElementById("bg");
let input = document.getElementById("input_text");
let submit = document.getElementById("submit");
let form = document.getElementById("form");
let clear = document.getElementById("clear_btn");
let mainOutPut = document.getElementById("main_outDiv");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    console.log("GGHG");
    Bg.style.height = "100%";
  }
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset < 100) {
    console.log("Prayag");
    Bg.style.height = "100vh";
  }
});

// submit.addEventListener("click", () => {
//   return console.log("Hii");
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value == "") {
    alert("Please Enter the Value");
  } else {
    mainOutPut.style.display = "inherit";
    // Adding Output Part
    let output = document.createElement("div");
    output.classList.add("output");
    let date = document.createElement("p");
    //

    let today = new Date();
    let presentDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let presentTime =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    //
    date.innerHTML = presentDate + `<br>` + presentTime;
    date.classList.add("date");
    let container = document.createElement("h5");
    container.innerHTML = input.value;
    container.contentEditable = "false";
    container.readOnly = true;
    container.classList.add("container");
    let output_icons = document.createElement("div");
    output_icons.classList.add("output_icons");
    let bi_trash3 = document.createElement("i");
    bi_trash3.classList.add("bi-trash3");
    bi_trash3.classList.add("bi");
    let bi_pencil_square = document.createElement("i");
    bi_pencil_square.classList.add("bi-pencil-square");
    bi_pencil_square.classList.add("bi");
    // Add remove list code
    bi_trash3.addEventListener("click", () => {
      output.style.display = "none";
    });

    bi_pencil_square.addEventListener("click", () => {
      if (bi_pencil_square.classList.contains("bi-pencil-square")) {
        console.log("Hii");
        container.contentEditable = "true";
        bi_pencil_square.classList.remove("bi-pencil-square");
        bi_pencil_square.classList.add("bi-check-lg");
        container.style.border = "1px solid gray";
      } else {
        console.log("BYe");
        container.contentEditable = "false";
        bi_pencil_square.classList.add("bi-pencil-square");
        bi_pencil_square.classList.remove("bi-check-lg");
        container.style.border = "none";
      }
    });

    // Relation
    mainOutPut.appendChild(output);
    output.appendChild(date);
    output.appendChild(container);
    output.appendChild(output_icons);
    output_icons.appendChild(bi_trash3);
    output_icons.appendChild(bi_pencil_square);
    input.value = "";
  }
});

clear.addEventListener("click", () => {
  mainOutPut.style.display = "none";
});
