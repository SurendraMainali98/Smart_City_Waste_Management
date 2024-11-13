import { WasteCollectionTruck } from './WasteCollectionTruck';

describe('WasteCollectionTruck Class', () => {
  it('should create a new waste collection truck', () => {
    const truck = new WasteCollectionTruck('T001', 'Driver A', 'Route 1', 80, new Date());
    expect(truck.truckID).toBe('T001');
    expect(truck.driverName).toBe('Driver A');
    expect(truck.currentRoute).toBe('Route 1');
    expect(truck.fuelLevel).toBe(80);
  });

  it('should collect waste and reduce fuel level', () => {
    const truck = new WasteCollectionTruck('T001', 'Driver A', 'Route 1', 80, new Date());
    console.log = jest.fn();
    truck.collectWaste();
    expect(console.log).toHaveBeenCalledWith('Fuel level after collection: 70');
  });
});
