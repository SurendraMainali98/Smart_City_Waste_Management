import { RouteOptimizationSystem } from '../RouteOptimizationSystem';

describe('RouteOptimizationSystem Class', () => {
  it('should create a new route optimization system', () => {
    const system = new RouteOptimizationSystem('R001', 'Greedy Algorithm', new Date());
    expect(system.systemID).toBe('R001');
    expect(system.algorithmType).toBe('Greedy Algorithm');
  });

  it('should calculate optimal route', () => {
    const system = new RouteOptimizationSystem('R001', 'Greedy Algorithm', new Date());
    console.log = jest.fn();
    system.calculateOptimalRoute();
    expect(console.log).toHaveBeenCalledWith('Calculating optimal route using Greedy Algorithm for system R001...');
  });
});
