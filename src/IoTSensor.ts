export class IoTSensor {
    sensorID: string;
    type: string;
    status: string;
    associatedBin: string;

    constructor(sensorID: string, type: string, status: string, associatedBin: string) {
        this.sensorID = sensorID;
        this.type = type;
        this.status = status;
        this.associatedBin = associatedBin;
    }

    monitorFillLevel() {
        console.log(`Monitoring fill level for sensor ${this.sensorID} associated with bin ${this.associatedBin}.`);
        // Placeholder for monitoring logic
    }

    detectTemperature() {
        console.log(`Detecting temperature for sensor ${this.sensorID} associated with bin ${this.associatedBin}.`);
        // Placeholder for temperature detection logic
    }

    sendSensorData() {
        console.log(`Sending sensor data from ${this.sensorID}...`);
        // Placeholder for sending sensor data logic
    }
}
