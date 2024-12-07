import { IoTSensor } from '../IoTSensor';

describe('IoTSensor Class', () => {
  it('should create a new sensor', () => {
    const sensor = new IoTSensor('S001', 'Temperature', 'active', 'Bin01');
    expect(sensor.sensorID).toBe('S001');
    expect(sensor.type).toBe('Temperature');
    expect(sensor.status).toBe('active');
    expect(sensor.associatedBin).toBe('Bin01');
  });

  it('should send sensor data', () => {
    const sensor = new IoTSensor('S001', 'Temperature', 'active', 'Bin01');
    console.log = jest.fn();
    sensor.sendSensorData();
    expect(console.log).toHaveBeenCalledWith('Sending sensor data from S001...');
  });
});
