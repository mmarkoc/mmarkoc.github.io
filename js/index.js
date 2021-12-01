// Resume button customization

let buttons = document.querySelectorAll(".resume-buttons");
let oldText;
let modals = document.querySelectorAll(".resume-modals");
let closeButtons = document.querySelectorAll(".close");
let projects = document.querySelectorAll(".project-link");

// Resume button events
buttons.forEach((button) => {
  // Change to "Click for more info" on hover
  button.onmouseover = function (event) {
    oldText = button.textContent;
    button.textContent = "Click for more info";
  };

  button.onmouseout = function (event) {
    button.textContent = oldText;
  };

  // On click show modal
  button.onclick = function (event) {
    if (button.id === "psu-1-button") {
      modals.forEach((modal) => {
        if (modal.id == "psu-1-modal") {
          modal.style.display = "block";
        }
      });
    } else if (button.id === "psu-2-button") {
      modals.forEach((modal) => {
        if (modal.id == "psu-2-modal") {
          modal.style.display = "block";
        }
      });
    } else if (button.id === "hp-button") {
      modals.forEach((modal) => {
        if (modal.id == "hp-modal") {
          modal.style.display = "block";
        }
      });
    } else if (button.id === "systemcom-button") {
      modals.forEach((modal) => {
        if (modal.id == "systemcom-modal") {
          modal.style.display = "block";
        }
      });
    }
  };
});

// Closing the modal

function closeModal(modal) {
  modal.style.display = "none";
}

closeButtons.forEach((close) => {
  // Close when 'X' is pressed
  close.onclick = function (event) {
    modals.forEach((modal) => {
      closeModal(modal);
    });
  };

  // Close if anywhere outside of modal is pressed
  window.onclick = function (event) {
    modals.forEach((modal) => {
      if (event.target == modal) closeModal(modal);
    });
  };
});
