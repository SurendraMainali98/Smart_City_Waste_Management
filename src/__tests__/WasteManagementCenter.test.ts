import { WasteManagementCenter } from '../WasteManagementCenter';

describe('WasteManagementCenter Class', () => {
  it('should create a new waste management center', () => {
    const center = new WasteManagementCenter('C001', 'City Center', 50, 2000);
    expect(center.centerID).toBe('C001');
    expect(center.location).toBe('City Center');
    expect(center.totalBinsManaged).toBe(50);
    expect(center.recyclingCapacity).toBe(2000);
  });

  it('should generate report', () => {
    const center = new WasteManagementCenter('C001', 'City Center', 50, 2000);
    console.log = jest.fn();
    center.generateReport();
    expect(console.log).toHaveBeenCalledWith('Generating report for Waste Management Center C001:');
  });
});
