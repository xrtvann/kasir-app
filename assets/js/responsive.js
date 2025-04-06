
  const menuIcon = document.getElementById("menuIcon");
  const navbarMenu = document.getElementById("navbarMenu");
  const toggler = document.querySelector(".navbar-toggler");

  toggler.addEventListener("click", function () {
    const isExpanded = toggler.getAttribute("aria-expanded") === "false";

    if (isExpanded) {
      menuIcon.classList.remove("bx-x");
      menuIcon.classList.add("bx-menu");
    } else {
      menuIcon.classList.remove("bx-menu");
      menuIcon.classList.add("bx-x");
    }
  });

