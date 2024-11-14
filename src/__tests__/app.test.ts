// __tests__/app.test.ts
import { calculateTotalWaste } from '../app';

describe('calculateTotalWaste', () => {
  // Test case 1: Check if the function calculates the correct total waste
  it('should correctly calculate the total waste collected from all bins', () => {
    const bins = [
      { waste: 5 },    // Bin 1: 5 units of waste
      { waste: 10 },   // Bin 2: 10 units of waste
      { waste: 15 },   // Bin 3: 15 units of waste
    ];

    const result = calculateTotalWaste(bins);

    // Expecting the total waste to be 5 + 10 + 15 = 30
    expect(result).toBe(30);
  });

  // Test case 2: Check if the function returns 0 for an empty array
  it('should return 0 if there are no bins', () => {
    const bins: { waste: number }[] = []; // Empty array of bins

    const result = calculateTotalWaste(bins);

    // Expecting the total waste to be 0 as there are no bins
    expect(result).toBe(0);
  });

  // Test case 3: Check if the function works when there is only one bin
  it('should return the correct total waste when there is only one bin', () => {
    const bins = [
      { waste: 5 }  // Only one bin with 5 units of waste
    ];

    const result = calculateTotalWaste(bins);

    // Expecting the total waste to be 5
    expect(result).toBe(5);
  });

  // Test case 4: Check if the function works with a large number of bins
  it('should handle a large number of bins correctly', () => {
    const bins = Array(100).fill({ waste: 1 });  // 100 bins, each with 1 unit of waste

    const result = calculateTotalWaste(bins);

    // Expecting the total waste to be 100 (1 * 100)
    expect(result).toBe(100);
  });
});
