document.addEventListener('DOMContentLoaded', function () {
  // Income Weekly Chart
const weeklyCtx = document.getElementById('incomeWeeklyChart');
if (weeklyCtx) {
  Chart.defaults.font.family = "'Poppins', sans-serif"; 
  Chart.defaults.font.weight = 500; 
  const incomeWeeklyChart = new Chart(weeklyCtx.getContext('2d'), {
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
}




// Income Monthly Chart


const monthlyCtx = document.getElementById('incomeMonthlyChart');
if (monthlyCtx) {
    
Chart.defaults.font.family = "'Poppins', sans-serif"; 
Chart.defaults.font.weight = 500; 
const incomeMonthlyChart = new Chart(monthlyCtx.getContext('2d'), {
  type: 'line',
  data: {
    labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'],
    datasets: [{
      label: 'Rp',
      data: [3400000, 5700000, 4300000, 7000000],
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
}

});