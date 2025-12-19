const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");
const controls = document.getElementById("nav-controls");


// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

// Hamburger menu event listener
btn.addEventListener("click", navToggle);

function onTabClick(e) {
  // Remove active classes (deactivate all tabs)
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });

  // Remove active classes (hide all panels)
  panels.forEach((panel) => {
    panel.classList.add("hidden");
  });

  // Activate a new tab and panel based on the target
  e.target.classList.add("border-softRed", "border-b-4");
  const classString = e.currentTarget.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}

function navToggle(){

  const isOpen = controls.classList.toggle("open");

  menu.classList.toggle("flex", isOpen);
  menu.classList.toggle("hidden", !isOpen);

  logo.src = isOpen
    ? "images/logo-bookmark-footer.svg"
    : "images/logo-bookmark.svg";
}

// Close the mobile menu when a navigation link is clicked
menu.addEventListener("click", () => {
  controls.classList.remove("open");
  menu.classList.remove("flex");
  menu.classList.add("hidden");
  logo.setAttribute("src", "images/logo-bookmark.svg");
});