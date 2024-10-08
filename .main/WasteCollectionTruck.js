"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WasteCollectionTruck = void 0;
class WasteCollectionTruck {
    constructor(truckID, driverName, currentRoute, fuelLevel, nextServiceDate) {
        this.truckID = truckID;
        this.driverName = driverName;
        this.currentRoute = currentRoute;
        this.fuelLevel = fuelLevel;
        this.nextServiceDate = nextServiceDate;
    }
    receiveRoute(newRoute) {
        this.currentRoute = newRoute;
        console.log(`Truck ${this.truckID} route updated to: ${this.currentRoute}`);
    }
    updateStatus() {
        console.log(`Truck ${this.truckID} is on route: ${this.currentRoute} with fuel level: ${this.fuelLevel}`);
    }
    collectWaste() {
        console.log(`Truck ${this.truckID} is collecting waste on route: ${this.currentRoute}`);
        // Simulate waste collection
        this.fuelLevel -= 10; // Assume waste collection uses some fuel
        console.log(`Fuel level after collection: ${this.fuelLevel}`);
    }
    optimizeRoute() {
        console.log(`Optimizing route for truck ${this.truckID}...`);
        // Placeholder for route optimization logic
    }
}
exports.WasteCollectionTruck = WasteCollectionTruck;
