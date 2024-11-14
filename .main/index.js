"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const SmartBin_1 = require("./SmartBin");
const WasteCollectionTruck_1 = require("./WasteCollectionTruck");
const WasteManagementCenter_1 = require("./WasteManagementCenter");
const CityAdministrator_1 = require("./CityAdministrator");
const IoTSensor_1 = require("./IoTSensor");
const RouteOptimizationSystem_1 = require("./RouteOptimizationSystem"); // Adjusted path
const RecyclingFacility_1 = require("./RecyclingFacility");
const Citizen_1 = require("./Citizen");


// Sample instances (for demonstration purposes)
const bin = new SmartBin_1.SmartBin("bin1", "Main St", 80, 30, 60, "Active", new Date());
const truck = new WasteCollectionTruck_1.WasteCollectionTruck("truck1", "John Doe", "Route A", 50, new Date());
const center = new WasteManagementCenter_1.WasteManagementCenter("center1", "City Center", 150, 5000);
const admin = new CityAdministrator_1.CityAdministrator("admin1", "Alice Smith", "Waste Management", "alice@example.com");
const sensor = new IoTSensor_1.IoTSensor("sensor1", "fill level", "Active", "bin1");
const optimizationSystem = new RouteOptimizationSystem_1.RouteOptimizationSystem("system1", "Dijkstra", new Date());
const recyclingFacility = new RecyclingFacility_1.RecyclingFacility("facility1", "Northside", 10000, 500);
const citizen = new Citizen_1.Citizen("citizen1", "Bob Johnson", "123 Elm St", 200, 75);


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
