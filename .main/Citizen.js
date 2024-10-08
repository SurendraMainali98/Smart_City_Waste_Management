"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Citizen = void 0;
class Citizen {
    constructor(citizenID, name, address, wasteContribution, recyclingRate) {
        this.citizenID = citizenID;
        this.name = name;
        this.address = address;
        this.wasteContribution = wasteContribution;
        this.recyclingRate = recyclingRate;
    }
    viewRecyclingHistory() {
        console.log(`Viewing recycling history for citizen ${this.name}...`);
        // Placeholder for viewing recycling history logic
    }
    reportIssue(issue) {
        console.log(`Citizen ${this.name} has reported an issue: ${issue}`);
    }
    receiveIncentives() {
        console.log(`Citizen ${this.name} is receiving incentives for recycling.`);
    }
}
exports.Citizen = Citizen;
