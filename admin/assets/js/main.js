document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleSidebar");
  const sidebar = document.getElementById("sidebar");
  const wrapper = document.getElementById('wrapper');

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    wrapper.classList.toggle("collapsed");
  });
});

const calendar = document.getElementById('calendar');
const today = new Date().toLocaleDateString('id-ID', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

calendar.innerText = today;