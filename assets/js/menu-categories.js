document.addEventListener("DOMContentLoaded", function () {
  const categoryTabs = document.querySelectorAll("#categoryTabs .nav-link");
  const menuItems = document.querySelectorAll(".menu-item");

  categoryTabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      categoryTabs.forEach((t) => t.classList.remove("active"));

      this.classList.add("active");

      const filter = this.dataset.filter;

      menuItems.forEach((item) => {
        const category = item.dataset.category;

        if (filter === "all" || category === filter) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
