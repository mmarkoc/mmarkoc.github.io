// Resume button customization

let buttons = document.querySelectorAll(".resume-buttons");
let oldText;

// Change to "Click for more info" on hover
buttons.forEach((element) => {
  element.onmouseover = function (event) {
    oldText = element.textContent;
    element.textContent = "Click for more info";
  };

  element.onmouseout = function (event) {
    element.textContent = oldText;
  };
});
