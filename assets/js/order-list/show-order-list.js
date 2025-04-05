let orderLists = [
  {
    id: "Order #001",
    customer_name: "Nama Pembeli",
    status: "Pending",
  },
  {
    id: "Order #002",
    customer_name: "Nama Pembeli",
    status: "Selesai",
  },
  {
    id: "Order #003",
    customer_name: "Nama Pembeli",
    status: "Cancel",
  },
  {
    id: "Order #004",
    customer_name: "Nama Pembeli",
    status: "Cancel",
  },
  {
    id: "Order #005",
    customer_name: "Nama Pembeli",
    status: "Selesai",
  },
  {
    id: "Order #006",
    customer_name: "Nama Pembeli",
    status: "Selesai",
  },
  {
    id: "Order #007",
    customer_name: "Nama Pembeli",
    status: "Pending",
  },
  {
    id: "Order #008",
    customer_name: "Nama Pembeli",
    status: "Pending",
  },
];

const orderListContainer = document.getElementById("order-list-container");

function showOrderList() {
  orderListContainer.innerHTML = "";

  orderLists.forEach((order) => {
    const orderDiv = document.createElement("div");
    orderDiv.classList.add("col-lg-3", "order-list");
    orderDiv.setAttribute("data-order-list", order.status);

    let orderStatus = "text-secondary";
    if (order.status.toLocaleLowerCase() === "selesai") {
      orderStatus = "text-success";
    } else if (order.status.toLocaleLowerCase() === "cancel") {
      orderStatus = "text-danger";
    }

    orderDiv.innerHTML = `
       <div class="card mb-4 pe-0 border-0">
              <div class="row g-0">
                <div class="col-lg-12">
                  <div class="card-body">
                    <a href="#" class="detail-order" data-bs-toggle="modal"
                data-bs-target="#detail-order-modal">
                    <h4 class="fw-semibold mt-2 mb-3">${order.id}</h4>
                    <div class="card-subtitle">
                      <p class="">${order.customer_name}</p>
                    </div>
                    <div class="order-status mt-5">
                      <p>Order Status : <span class="${orderStatus} fw-bold">${order.status}</span></p>
                    </div>
                  </a>
                  </div>
                </div>
                </div>
              </div>
      `;

    orderListContainer.appendChild(orderDiv);
  });
}

showOrderList();
