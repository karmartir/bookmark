const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

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
  document.getElementById('panels').getElementsByClassName(classString)[0].classList.remove('hidden');
}
