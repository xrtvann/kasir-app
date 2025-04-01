function formatNumber(input) {
  // Menghapus karakter non digit
  let cleanedValue = input.value.replace(/\D/g, "");

  // Memisahkan nilai menjadi bagian ribuan menggunakan regular expression
  cleanedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Memperbarui nilai input dengan format yang di inginkan
  input.value = cleanedValue;
  document.getElementById("nominal").value = cleanedValue.replace(/,/g, "");
}
