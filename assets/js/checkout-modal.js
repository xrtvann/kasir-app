function formatNumber(input) {
  let cleanedValue = input.value.replace(/\D/g, "");

  if (cleanedValue === "") {
    cleanedValue = "0";
  }

  let formattedValue = new Intl.NumberFormat("id-ID").format(cleanedValue);

  input.value = formattedValue;
  document.getElementById("payment-amount-hidden").value = cleanedValue;

  updateChangeAmount();
}

function updateChangeAmount() {
  const paymentAmountHidden = document.getElementById("payment-amount-hidden");
  const paymentAmountText = document.getElementById("payment-amount-text");
  const totalPaymentInputHidden = document.getElementById("nominal-payment");
  const changeAmount = document.getElementById("change-amount-text");

  let total = parseInt(totalPaymentInputHidden.value) || 0;
  let payment = parseInt(paymentAmountHidden.value) || 0;

  let change = null;

  if (payment >= total) {
    change = payment - total;
    changeAmount.textContent = `Rp ${change.toLocaleString("id-ID")}`;
  } else {
    change = "Uang anda kurang";
    changeAmount.textContent = `Uang anda kurang`;
  }

  paymentAmountText.textContent = `Rp ${payment.toLocaleString("id-ID")}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const totalAmount = document.getElementById("total-payment");
  const paymentAmountInput = document.getElementById("payment-amount");

  const totalAmountText = document.getElementById("total-amount-text");
  const totalPaymentInputHidden = document.getElementById("nominal-payment");

  function updateCheckoutModal() {
    let taxAmount = 2500;

    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    let total = subtotal + taxAmount;

    totalAmount.value = total.toLocaleString("id-ID");
    totalAmountText.textContent = `Rp ${total.toLocaleString("id-ID")}`;
    totalPaymentInputHidden.value = total;

    updateChangeAmount();
  }

  document
    .getElementById("checkoutmodal")
    .addEventListener("show.bs.modal", updateCheckoutModal);

  paymentAmountInput.addEventListener("input", function () {
    formatNumber(this);
  });
});
