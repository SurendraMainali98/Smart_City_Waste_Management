export class WasteCollectionTruck {
    truckID: string;
    driverName: string;
    currentRoute: string;
    fuelLevel: number;
    nextServiceDate: Date;

    constructor(
        truckID: string,
        driverName: string,
        currentRoute: string,
        fuelLevel: number,
        nextServiceDate: Date
    ) {
        this.truckID = truckID;
        this.driverName = driverName;
        this.currentRoute = currentRoute;
        this.fuelLevel = fuelLevel;
        this.nextServiceDate = nextServiceDate;
    }

    receiveRoute(newRoute: string) {
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
