const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, officeNumber);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
  getPerson() {
    let HTML = `
    <div class='card d-inline-flex text-dark m-3' style='width: 20%;'>
    <div class='card-header bg-primary text-dark h3'>
        ${this.name}
        <h6 class='card-subtitle mb-2 text-light'>Manager</h6>
    </div>
    <div class='card-body'>
        <ul class='list-group'>
            <li class='list-group-item'>ID: ${this.id}</li>
            <li class='list-group-item'>Email: <a href='mailto:${this.email}'>${this.email}</a></li>
            <li class='list-group-item'>Office Number: ${this.officeNumber}</li>
        </ul>
    </div>
    </div>
    `;

    return HTML;
  }
}

module.exports = Manager;
