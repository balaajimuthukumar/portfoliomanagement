export interface AssetAllocation {
  assetType: string;
  investment: number;
  percentage: number;
}

export interface AssetComparison {
  assetType: string;
  investment: number;
}

export interface PriceTrend {
  date: Date;
  price: number;
  assetType: string;
}


const assetAllocations: AssetAllocation[] = [
  { assetType: 'Stocks', investment: 5000, percentage: 50 },
  { assetType: 'Bonds', investment: 3000, percentage: 30 },
  { assetType: 'Real Estate', investment: 2000, percentage: 20 }
];


const assetComparisons: AssetComparison[] = [
  { assetType: 'Stocks', investment: 5000 },
  { assetType: 'Bonds', investment: 3000 },
  { assetType: 'Real Estate', investment: 2000 }
];


const priceTrends: PriceTrend[] = [
  { date: new Date('2025-01-01'), price: 50, assetType: 'Stocks' },
  { date: new Date('2025-02-01'), price: 52, assetType: 'Stocks' },
  { date: new Date('2025-03-01'), price: 48, assetType: 'Stocks' }
];


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
        mode: 'nearest', // Interacts with the closest point
        intersect: true, // Only trigger when directly over an item
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


