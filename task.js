// UŽDUOTIS:
// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
// 2.7. Property „workingLocations" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
// 2.9. Property „contacts", kuris turės:
//       2.9.1. „phone"
//       2.9.2. „email"
//       2.9.3. „address", kuris turės:
//           2.9.3.1. „country"
//           2.9.3.2. „city"
//           2.9.3.3. „street"
//           2.9.3.4. „apartment"

let company1 = new Object();

company1["company name"] = "Presta Rock";
company1.opened = 2012;
company1.companyCode = 11122234;
company1.employees = 20;
company1.ceo = "Vardenis Paverdenis";

company1.workingLocations = ["Lithunia", "Latvia"];

console.log(company1);

company1.activityAreas = ["e-shop development", "e-shop audit"];

company1.contacts = new Object();
company1.contacts.phone = 37065898444;
company1.contacts.email = "info@prestarock.com";
company1.contacts.address = new Object();

company1.contacts.address.country = "Lithuania";
company1.contacts.address.city = "Kaunas";
company1.contacts.address.street = "Savanorių pr.";
company1.contacts.address.apartment = 277;

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".

company1.contacts.address.getFullAddress = function () {
  return `${this.street} ${this.apartment}, ${this.city}, ${this.country}`;
};

console.log(company1.contacts.address.getFullAddress());

// 6. Sukurti funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
//        6.2. Pakeičia NVO statusą į false.
//        6.3. Keičia NVO statusą iš true į false ir iš false į true.
company1.setIsNvo = function () {
  this.isNvo = true;
};

company1.setNotNvo = function () {
  this.isNvo = false;
};
company1.switchNvo = function () {
  this.isNvo = !this.isNvo;
};

company1.setNotNvo();

// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.

function getAllLocations() {
  return company1.workingLocations.join(", ");
}
console.log(getAllLocations());

function getAllActivities() {
  return company1.activityAreas.join(", ");
}
console.log(getAllActivities());

// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
//        8.2. Naują veiklos rūšį prie veiklų masyvo.

company1.addWorkingLocation = function (locationToAdd) {
  this.workingLocations.push(locationToAdd);
};
company1.addWorkingLocation("Estonia");
console.log(company1.workingLocations);

company1.addActivityArea = function (activityToAdd) {
  this.activityAreas.push(activityToAdd);
};
company1.addActivityArea("Web design");
console.log(company1.activityAreas);

// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
//        9.2. Veiklos rūšį iš veiklų masyvo.

company1.workingLocations.removeWorkingLocation = function (locationToRemove) {
  let filteredLocations = company1.workingLocations.filter((location) => {
    return location !== locationToRemove;
  });
  company1.workingLocations = filteredLocations;
};

company1.workingLocations.removeWorkingLocation("Estonia");
console.log(company1.workingLocations);

company1.activityAreas.removeActivityArea = function (activityToRemove) {
  let filteredActivities = company1.activityAreas.filter((activity) => {
    return activity !== activityToRemove;
  });
  company1.activityAreas = filteredActivities;
};

company1.activityAreas.removeActivityArea("Web design");
console.log(company1.activityAreas);

//Company2

let company2 = {
  "company name": "Interneto vizija",
  opened: 2003,
  companyCode: 111222333,
  employees: 56,
  ceo: "Vardenė Pavardenė",
  workingLocations: ["Lithuania", "Poland"],
  activityAreas: ["Web development", "Hosting"],
  contacts: {
    phone: +37068798741,
    email: "info@internetovizija.lt",
    address: {
      country: "Lithuania",
      city: "Vilnius",
      street: "J. Kubiliaus str.",
      apartment: 6,
    },
  },
  getFullAddress: function () {
    return `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}`;
  },
  setIsNvo: function () {
    this.isNvo = true;
  },
  setNotNvo: function () {
    this.isNvo = false;
  },
  switchNvo: function () {
    this.isNvo = !this.isNvo;
  },
  getAllLocations: function () {
    return this.workingLocations.join(", ");
  },
  getAllActivityAreas: function () {
    return this.activityAreas.join(", ");
  },
  addWorkingLocation: function (locationToAdd) {
    this.workingLocations.push(locationToAdd);
  },
  addActivityArea: function (activityToAdd) {
    this.activityAreas.push(activityToAdd);
  },
  removeWorkingLocation: function (locationToRemove) {
    let filteredLocations = this.workingLocations.filter((location) => {
      return location !== locationToRemove;
    });
    this.workingLocations = filteredLocations;
  },
  removeActivityArea: function (activityToRemove) {
    let filteredActivities = this.activityAreas.filter((activity) => {
      return activity !== activityToRemove;
    });
    this.activityAreas = filteredActivities;
  },
};

console.log(company2);
console.log(company2.getFullAddress());

company2.setIsNvo();

console.log(company2.getAllLocations());
console.log(company2.getAllActivityAreas());

company2.addWorkingLocation("Latvia");
console.log(company2.workingLocations);

company2.addActivityArea("SSL sertificates");
console.log(company2.activityAreas);

company2.removeWorkingLocation("Poland");
console.log(company2.workingLocations);

company2.removeActivityArea("SSL sertificates");
console.log(company2.activityAreas);
