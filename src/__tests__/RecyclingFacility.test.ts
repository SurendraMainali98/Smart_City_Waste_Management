import { RecyclingFacility } from '../RecyclingFacility';

describe('RecyclingFacility Class', () => {
  it('should create a new recycling facility', () => {
    const facility = new RecyclingFacility('F001', 'Location A', 1000, 500);
    expect(facility.facilityID).toBe('F001');
    expect(facility.location).toBe('Location A');
    expect(facility.totalCapacity).toBe(1000);
    expect(facility.currentLoad).toBe(500);
  });

  it('should process recyclables', () => {
    const facility = new RecyclingFacility('F001', 'Location A', 1000, 500);
    console.log = jest.fn();
    facility.processRecyclables();
    expect(console.log).toHaveBeenCalledWith('Processing recyclables at facility F001...');
  });
});
