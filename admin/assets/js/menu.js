

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

document.querySelectorAll('#menuTab a[data-bs-toggle="pill"]').forEach((tab) => {
  tab.addEventListener('shown.bs.tab', function (e) {
    localStorage.setItem('activeMenuTab', e.target.getAttribute('data-bs-target'));
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const lastTab = localStorage.getItem('activeMenuTab');
  if (lastTab) {
    const tabTrigger = document.querySelector(`#menuTab a[data-bs-target="${lastTab}"]`);
    if (tabTrigger) {
      new bootstrap.Tab(tabTrigger).show();
    } else {
      const firstTab = document.querySelector('#menuTab a[data-bs-toggle="pill"]');
      if (firstTab) {
      new bootstrap.Tab(firstTab).show();
    }
    }
  }
});