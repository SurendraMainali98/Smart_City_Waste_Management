export class CityAdministrator {
    adminID: string;
    name: string;
    department: string;
    email: string;

    constructor(adminID: string, name: string, department: string, email: string) {
        this.adminID = adminID;
        this.name = name;
        this.department = department;
        this.email = email;
    }

    approvePolicyChange() {
        console.log(`City Administrator ${this.name} has approved a policy change.`);
    }

    viewWasteData() {
        console.log(`Viewing waste data for department: ${this.department}`);
        // Placeholder for viewing waste data logic
    }

    updateBudget(newBudget: number) {
        console.log(`Updating budget for department ${this.department} to: ${newBudget}`);
        // Placeholder for budget update logic
    }
}
