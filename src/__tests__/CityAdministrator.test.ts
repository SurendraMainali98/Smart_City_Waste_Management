import { CityAdministrator } from '../CityAdministrator';

describe('CityAdministrator Class', () => {
  it('should create a new city administrator', () => {
    const admin = new CityAdministrator('A001', 'Alice', 'Waste Management', 'alice@city.com');
    expect(admin.adminID).toBe('A001');
    expect(admin.name).toBe('Alice');
    expect(admin.department).toBe('Waste Management');
    expect(admin.email).toBe('alice@city.com');
  });

  it('should approve policy change', () => {
    const admin = new CityAdministrator('A001', 'Alice', 'Waste Management', 'alice@city.com');
    console.log = jest.fn();
    admin.approvePolicyChange();
    expect(console.log).toHaveBeenCalledWith('City Administrator Alice has approved a policy change.');
  });
});
