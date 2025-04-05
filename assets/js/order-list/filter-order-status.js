document.addEventListener("DOMContentLoaded", function () {
  const orderStatusTabs = document.querySelectorAll("#orderStatusTabs .nav-link");
  const orderList = document.querySelectorAll(".order-list");

  orderStatusTabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      orderStatusTabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      const filter = this.dataset.filter;

      orderList.forEach((order) => {
        const orderStatus = order.dataset.orderList;

        if (filter === "all" || filter === orderStatus.toLowerCase()) {
          order.style.display = "block";
        } else {
          order.style.display = "none";
        }
      });
    });
  });
});
