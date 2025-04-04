let cart = JSON.parse(localStorage.getItem("cart")) || [];
const taxAmount = 2500;

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(menu) {
  let existingItem = cart.find((item) => item.id === menu.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...menu, quantity: 1 });
  }

  saveCart();
  renderCart();
}

function updateCartSummary() {
  const subtotal = cart.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );
  const total = subtotal + taxAmount;

  document.getElementById(
    "subtotal-amount"
  ).textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;

  document.getElementById(
    "tax-amount"
  ).textContent = `Rp ${taxAmount.toLocaleString('id-ID')}`;

  document.getElementById(
    "total-amount"
  ).textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

function renderCart() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("row", "align-items-center", "g-3", "mt-3");

    cartItem.innerHTML = `
    <div class="col-3 col-lg-2">
      <img src="${item.image}" alt="${item.name}" class="rounded-2 w-100"/>
    </div>
    <div class="col-9 col-lg-4">
      <p class="mb-0 fw-semibold">${item.name}</p>
      <p class="mb-0 fw-semibold text-secondary">Rp ${item.price.toLocaleString('id-ID')}</p>
    </div>
    <div class="col-4 col-lg-2">
      <div class="d-flex align-items-center gap-2">
        <button class="btn btn-sm btn-quantity rounded-circle decrease-qty" data-id="${
          item.id
        }">
          <i class="bx bx-minus"></i>
        </button>
        <p class="mb-0">${item.quantity}</p>
        <button class="btn btn-sm btn-quantity rounded-circle increase-qty" data-id="${
          item.id
        }">
          <i class="bx bx-plus"></i>
        </button>
      </div>
    </div>
    <div class="col-6 col-lg-3">
      <p class="mb-0 text-dark fw-bold text-end">Rp ${(
        item.price * item.quantity
      ).toLocaleString('id-ID')}</p>
    </div>
    <div class="col-2 col-lg-1">
      <button class="btn btn-sm btn-light btn-delete" data-id="${item.id}">
        <i class="bx bx-trash"></i>
      </button>
    </div>
  `;

    cartContainer.appendChild(cartItem);
  });

  document.querySelectorAll(".increase-qty").forEach((button) => {
    button.addEventListener("click", function () {
      increaseQuantity(this.dataset.id);
    });
  });

  document.querySelectorAll(".decrease-qty").forEach((button) => {
    button.addEventListener("click", function () {
      decreaseQuantity(this.dataset.id);
    });
  });

  document.querySelectorAll(".btn-delete").forEach((button) => {
    button.addEventListener("click", function () {
      removeFromCart(this.dataset.id);
    });
  });

  updateCartSummary();
}

function increaseQuantity(id) {
  let item = cart.find((i) => i.id === parseInt(id));

  if (item) {
    item.quantity += 1;
  }
  saveCart();
  renderCart();
}

function decreaseQuantity(id) {
  let item = cart.find((i) => i.id === parseInt(id));

  if (item) {
    item.quantity -= 1;
    if (item.quantity <= 0) {
      cart = cart.filter((i) => i.id !== parseInt(id));
    }
  }
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== parseInt(id));
  saveCart();
  renderCart();
}

document.addEventListener("DOMContentLoaded", function () {
  renderCart();
});
