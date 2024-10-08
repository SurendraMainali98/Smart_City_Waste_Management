export class SmartBin {
    binID: string;
    location: string;
    currentFillLevel: number;
    temperature: number;
    humidity: number;
    status: string;
    lastServiceDate: Date;

    constructor(
        binID: string,
        location: string,
        currentFillLevel: number,
        temperature: number,
        humidity: number,
        status: string,
        lastServiceDate: Date
    ) {
        this.binID = binID;
        this.location = location;
        this.currentFillLevel = currentFillLevel;
        this.temperature = temperature;
        this.humidity = humidity;
        this.status = status;
        this.lastServiceDate = lastServiceDate;
    }

    sendData() {
        console.log(`Sending data for bin ${this.binID}:`);
        console.log(`Location: ${this.location}, Fill Level: ${this.currentFillLevel}, Temperature: ${this.temperature}, Humidity: ${this.humidity}, Status: ${this.status}`);
    }

    alert() {
        if (this.currentFillLevel > 90) {
            console.log(`Alert! Bin ${this.binID} is nearly full.`);
        }
    }

    updateStatus(newStatus: string) {
        this.status = newStatus;
        console.log(`Bin ${this.binID} status updated to: ${this.status}`);
    }
}
