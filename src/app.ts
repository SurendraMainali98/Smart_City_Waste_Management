// app.ts

// Function to calculate total waste collected from bins
export const calculateTotalWaste = (bins: { waste: number }[]): number => {
    return bins.reduce((total, bin) => total + bin.waste, 0);
  };
  