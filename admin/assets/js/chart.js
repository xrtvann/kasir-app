const ctx = document.getElementById('incomeChart').getContext('2d');
Chart.defaults.font.family = "'Poppins', sans-serif"; 
Chart.defaults.font.weight = 500; 
const incomeChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
    datasets: [{
      label: 'Rp',
      data: [400000, 500000, 700000, 450000, 600000, 800000, 900000],
      backgroundColor: 'rgba(11, 180, 62, 0.7)',
      borderRadius: 6,
      borderSkipped: false
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        ticks: {
          callback: function(value) {
            return 'Rp ' + value.toLocaleString('id-ID');
          }
        }
      }
    }
  }
});