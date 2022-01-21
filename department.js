class Department {
    name;

    printName() {
        console.log("Department name: " + this.name);
    }
}

class AccountingDepartment extends Department {
    printMeeting() {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports() {
        console.log("Generating accounting reports...");
    }
}
