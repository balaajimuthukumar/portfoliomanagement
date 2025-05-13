//Pie Chart
export const assetAllocationData = {
    labels: [],
    datasets: []
  };

export const assetAllocationOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as 'top' | 'left' | 'right' | 'bottom' | 'center',
      }
    }
  };


  //Bar Chart
export const assetComparisonData = {
    labels: [],
    datasets: []
  };

export const assetComparisonOptions = {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  };

  // Line Chart
export const priceTrendData = {
    labels: [],
    datasets: [
    ]
  };

export const priceTrendOptions = {
    responsive: true,
    interaction: {
        mode: 'nearest',
        intersect: true,
    },    
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Price'
        }
      }
    }
  };

  //benchmark 
export const performanceData = {
      labels: [],
      datasets: []
    };

export const performanceOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as 'top' | 'left' | 'right' | 'bottom' | 'center'
      },
      tooltip: {
        enabled: true
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Performance Index'
        }
      }
    }
  };    


