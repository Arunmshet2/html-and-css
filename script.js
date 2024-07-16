const addButton = document.querySelector(".parent5");
const parent3 = document.querySelector(".parent3");

addButton.addEventListener("click", () => {
  const p = '<div class="parent3"> <div class="shanks1"></div> <div class="shanks2"></div> <div class="shanks3"> <div class="shanks4">About</div> <div class="shanks5"></div> </div>';

  // Insert the HTML
  parent3.insertAdjacentHTML("afterbegin", p);

  // Now attach an event listener to the newly created .shanks4 element
  const shanks4 = parent3.querySelector(".shanks4");
  shanks4.addEventListener("click", () => {
    console.log("About clicked!"); // Replace with your desired behavior
  });
});


