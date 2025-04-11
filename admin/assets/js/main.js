document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleSidebar");
  const sidebar = document.getElementById("sidebar");
  const wrapper = document.getElementById('wrapper');

  

  const isCollapsed = localStorage.getItem("sidebarCollapsed") === "true";
  if (isCollapsed) {
    sidebar.classList.add("collapsed");
    wrapper.classList.add("collapsed");
    
  }

  
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    wrapper.classList.toggle("collapsed");

 
    const collapsedNow = sidebar.classList.contains("collapsed");
    localStorage.setItem("sidebarCollapsed", collapsedNow);
  });

  // toggleBtn.addEventListener("click", () => {
  //   sidebar.classList.toggle("collapsed");
  //   wrapper.classList.toggle("collapsed");
  // });
});

const calendar = document.getElementById('calendar');
const today = new Date().toLocaleDateString('id-ID', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

calendar.innerText = today;


