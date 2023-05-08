const hambs1 = document.querySelector(".hambs1");
const navList = document.querySelector(".menu-overlay");

// Modal click
const modal = document.getElementById("modal");
// Get the button that opens the modal
const openModalBtn = document.getElementById("open-modal");
// Get the <span> element that closes the modal
const closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
openModalBtn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  // Store form data in local storage
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("message", message);

  // Display success message
  alert("Login data saved successfully!");
  //   Check if name is already saved in local storage
  if (localStorage.getItem("name")) {
    const savedName = localStorage.getItem("name");
    alert(`Welcome back, ${savedName}!`);
  }
});

hambs1.addEventListener("click", function () {
  navList.classList.toggle("active");
  hambs1.classList.toggle("click");
});
