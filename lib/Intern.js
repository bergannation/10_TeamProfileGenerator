const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email, school);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
  getPerson() {
    let HTML = `
    <div class='card d-inline-flex text-dark m-3' style='width: 20%;'>
    <div class='card-header bg-danger text-dark h3'>
        ${this.name}
        <h6 class='card-subtitle mb-2 text-light'>Intern</h6>
    </div>
    <div class='card-body'>
        <ul class='list-group'>
            <li class='list-group-item'>ID: ${this.id}</li>
            <li class='list-group-item'>Email:<a href='mailto:${this.email}'>${this.email}</a></li>
            <li class='list-group-item'>School: ${this.school}</li>
        </ul>
    </div>
    </div>
    `;

    return HTML;
  }
}

module.exports = Intern;
