export class Citizen {
    citizenID: string;
    name: string;
    address: string;
    wasteContribution: number;
    recyclingRate: number;

    constructor(citizenID: string, name: string, address: string, wasteContribution: number, recyclingRate: number) {
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

    reportIssue(issue: string) {
        console.log(`Citizen ${this.name} has reported an issue: ${issue}`);
    }

    receiveIncentives() {
        console.log(`Citizen ${this.name} is receiving incentives for recycling.`);
    }
}
