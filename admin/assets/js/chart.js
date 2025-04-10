const ctx = document.getElementById('incomeChart').getContext('2d');
const incomeChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
    datasets: [{
      label: 'Rp',
      data: [500000, 700000, 450000, 600000, 800000, 400000, 900000],
      backgroundColor: 'rgba(54, 162, 235, 0.7)',
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