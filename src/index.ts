import { SmartBin } from './SmartBin';
import { WasteCollectionTruck } from './WasteCollectionTruck';
import { WasteManagementCenter } from './WasteManagementCenter';
import { CityAdministrator } from './CityAdministrator';
import { IoTSensor } from './IoTSensor';
import { RouteOptimizationSystem } from './RouteOptimizationSystem'; // Adjusted path
import { RecyclingFacility } from './RecyclingFacility';
import { Citizen } from './Citizen';

// Sample instances (for demonstration purposes)
const bin = new SmartBin("bin1", "Main St", 80, 30, 60, "Active", new Date());
const truck = new WasteCollectionTruck("truck1", "John Doe", "Route A", 50, new Date());
const center = new WasteManagementCenter("center1", "City Center", 150, 5000);
const admin = new CityAdministrator("admin1", "Alice Smith", "Waste Management", "alice@example.com");
const sensor = new IoTSensor("sensor1", "fill level", "Active", "bin1");
const optimizationSystem = new RouteOptimizationSystem("system1", "Dijkstra", new Date());
const recyclingFacility = new RecyclingFacility("facility1", "Northside", 10000, 500);
const citizen = new Citizen("citizen1", "Bob Johnson", "123 Elm St", 200, 75);

// Example usage
bin.sendData();
bin.alert();
truck.collectWaste();
truck.updateStatus();
center.generateReport();
admin.approvePolicyChange();
sensor.monitorFillLevel();
sensor.detectTemperature();
optimizationSystem.calculateOptimalRoute();
recyclingFacility.processRecyclables();
citizen.viewRecyclingHistory();
