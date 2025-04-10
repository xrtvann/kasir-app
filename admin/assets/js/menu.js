

// Fungsi tombol hapus
document.addEventListener("DOMContentLoaded", function () {
    const tombolHapus = document.querySelectorAll(".delete-button");
  
    tombolHapus.forEach(button => {
      button.addEventListener("click", function () {

  
        Swal.fire({
          title: 'Yakin ingin menghapus?',
          text: `Menu "Nasi Goreng" akan dihapus!`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#6c757d',
          confirmButtonText: 'Ya, hapus',
          cancelButtonText: 'Batal'
        }).then((result) => {
          if (result.isConfirmed) {
          
            Swal.fire({
              title: 'Terhapus!',
              text: `Menu "Nasi Goreng" telah dihapus.`,
              icon: 'success'
            });
          }
        });
      });
    });
});