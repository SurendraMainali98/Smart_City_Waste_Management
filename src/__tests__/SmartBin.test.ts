import { SmartBin } from './SmartBin';

describe('SmartBin Class', () => {
  it('should create a new smart bin', () => {
    const bin = new SmartBin('B001', 'Street 1', 80, 22, 60, 'Active', new Date());
    expect(bin.binID).toBe('B001');
    expect(bin.location).toBe('Street 1');
    expect(bin.currentFillLevel).toBe(80);
    expect(bin.temperature).toBe(22);
    expect(bin.humidity).toBe(60);
    expect(bin.status).toBe('Active');
  });

  it('should alert when the bin is nearly full', () => {
    const bin = new SmartBin('B001', 'Street 1', 95, 22, 60, 'Active', new Date());
    console.log = jest.fn();
    bin.alert();
    expect(console.log).toHaveBeenCalledWith('Alert! Bin B001 is nearly full.');
  });
});
