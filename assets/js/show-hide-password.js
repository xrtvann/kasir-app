document.getElementById("showPassword").addEventListener("change", function () {
  let passwordInput = document.getElementById("password");
  passwordInput.type = this.checked ? "text" : "password";
});

document.getElementById("showPassword").addEventListener("change", function () {
    let passwordInput = document.getElementById("confirmpassword");
    passwordInput.type = this.checked ? "text" : "password";
  });
