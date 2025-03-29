document.addEventListener("DOMContentLoaded", function () {
  const categoryTabs = document.querySelectorAll("#categoryTabs .nav-link");
  const menuItems = document.querySelectorAll(".menu-item");

  categoryTabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      categoryTabs.forEach((t) => t.classList.remove("active"));

      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      menuItems.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
