"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityAdministrator = void 0;
class CityAdministrator {
    constructor(adminID, name, department, email) {
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
    updateBudget(newBudget) {
        console.log(`Updating budget for department ${this.department} to: ${newBudget}`);
        // Placeholder for budget update logic
    }
}
exports.CityAdministrator = CityAdministrator;
