import { Citizen } from './Citizen';

describe('Citizen Class', () => {
  it('should create a new citizen', () => {
    const citizen = new Citizen('C001', 'John Doe', '123 Street', 50, 75);
    expect(citizen.citizenID).toBe('C001');
    expect(citizen.name).toBe('John Doe');
    expect(citizen.address).toBe('123 Street');
    expect(citizen.wasteContribution).toBe(50);
    expect(citizen.recyclingRate).toBe(75);
  });

  it('should report an issue', () => {
    const citizen = new Citizen('C001', 'John Doe', '123 Street', 50, 75);
    console.log = jest.fn(); // Mock console.log
    citizen.reportIssue('Full bin');
    expect(console.log).toHaveBeenCalledWith('Citizen John Doe has reported an issue: Full bin');
  });
});
