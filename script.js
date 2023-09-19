//Objektai
//Saugantis daugiau informacijos, nei vieną parametrą. Daugiau apibudinantis vieną objektą. O masyvas yra duomenų rinkinys.

console.groupCollapsed("Masyvai");
//Masyvo kūrimas
let students = ["steve", "jhon", "peter"];
console.log(students);
//Masyvo narių pasiekimas
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

//Kaip iteruojama per masyvą (ciklai/loops)

//for ciklas
for (let i = 0; i < students.length; i++) {
  console.log("for ciklas: " + students[i]);
}

//map ciklas
students.map((student) => {
  console.log("map ciklas: " + student);
});

//forEach ciklas
students.forEach((student) => {
  console.log("forEach ciklas: " + student);
});

//while ciklas
let n = 0;
while (n < students.length) {
  console.log("while ciklas: " + students[n]);
  n++;
}

//do...while
let m = 0;
do {
  console.log("do while ciklas: " + students[m]);
  m++;
} while (m < students.length);

// do while nuo while skiriasi tuo, kad pirma padaro, po to galvoja ką padarė. Visada paleis vieną ciklą. Jei norim, kad suveiktų bent vieną kartą, tai naudojam šitą ciklą.

//for ... of ciklas
for (let student of students) {
  console.log("for...of ciklas: " + student);
}

let student1 = ["jhon", "doe", 25, "Vilnius", "feu9"];
console.log(student1[0]);
console.log(student1[1]);
console.log(student1[2]);
console.log(student1[3]);
console.log(student1[4]);

console.groupEnd();

//for...in ciklas naudojamas su objektais

/* 
Studentas 1:
 - Vardas: Jhon,
 - Pavarde: Doe,
 - Amzius: 25,
 - Miestas: Vilnius,
 - Grupe: Feu9,
 - Antras vardas: Steve

Objekto sitaksė:
 let obj = {
    key: "value",

 }

*/

let studentObj = {
  name: "Jhon",
  surname: "Doe",
  age: 25,
  city: "Vilnius",
  group: "FEU9",
  "second name": "Steve",
  grades: [7, 8, 9],
  address: {
    city: "kaunas",
    street: "Vilniaus st",
  },
  getFullName: function () {
    //return `Full name is: ${studentObj.name} ${studentObj["second name"]} ${studentObj.surname}`
    //jei reikia funkcijai to paties objekto duomenų kurioje ji yra sukurta, tai rašom žodį "this"
    return `Full name is: ${this.name} ${this["second name"]} ${this.surname}`;
  },
  //Kurti funkciją kuri pakeičia property
  //   setStudentInactive: function () {
  //     this.isActive = false;
  //   },
  //   setStudentActive: function () {
  //     this.isActive = true;
  //   },
  //Galima ir taip rašyti
  setStudentInactive() {
    this.isActive = false;
  },
  setStudentActive() {
    this.isActive = true;
  },
  removeHobby(hobbyToRemove) {
    // let filteredHobbies = this.hobbies.filter((hobby) => {

    //   return hobby !== hobbyToRemove;
    // });
    // this.hobbies = filteredHobbies;
    this.hobbies = this.hobbies.filter((hobby) => hobby !== hobbyToRemove);
  },
};

console.log(studentObj);
console.log(studentObj["name"]);
console.log(studentObj["surname"]);
console.log(studentObj["age"]);
console.log(studentObj["city"]);
console.log(studentObj["group"]);
console.log(studentObj["secondName"]);

let propertyName = "age";
console.log(studentObj[propertyName]);

//Dot notation. jei kintamasis nesilaiko javascript pavadinimų taisyklių, tai negalim naudooti pvz: console.log(studentObj.second name). Taip pat negalim naudoti ir jau sukurtų property kaip pvz  console.log(studentObj.propertyName)
console.log(studentObj.name);
console.log(studentObj.surname);

//Objekto properties pakeitimas
console.log(studentObj.age);
// studentObj.age = studentObj.age + 1
// studentObj.age = 26
studentObj["city"] = "kaunas";

//Objekto propierties naujos reikšmės sukūrimas
studentObj.isActive = true;
console.log(studentObj.isActive);

studentObj["birth city"] = "Klaipeda";
console.log(studentObj["birth city"]);

//Objekto property ištrynimas
delete studentObj["birth city"];
delete studentObj.group;
console.log(studentObj);

//Masyvai objektuose.
studentObj.hobbies = ["sports", "reading"];

console.log(studentObj.hobbies);
console.log(studentObj.hobbies[0]);
console.log(studentObj.hobbies[1]);

studentObj.hobbies.forEach((hobby) => {
  console.log(hobby);
});

//Obejtai objektuose
studentObj.contacts = {
  phone: 86745628,
  email: "email@email.lt",
};

console.log(studentObj.contacts);
console.log(studentObj.contacts.phone);
console.log(studentObj.contacts.email);

//Į objektus galim pridėti ir funkcijas. Objektuose sukurtos funkcijos yra vadinamos metodais.

console.log(studentObj.getFullName());

console.log(studentObj.isActive);
studentObj.setStudentInactive();
console.log(studentObj.isActive);

studentObj.switchStudentActivity = function () {
  // if (this.isActive) {
  //   this.isActive = false
  // } else {
  //   this.isActive = true
  // }

  this.isActive = !this.isActive;
};

studentObj.switchStudentActivity();
console.log(studentObj.isActive);
studentObj.switchStudentActivity();
console.log(studentObj.isActive);
studentObj.switchStudentActivity();
console.log(studentObj.isActive);

console.log(studentObj.hobbies);

studentObj.addHobby = function (hobbyToAdd) {
  this.hobbies.push(hobbyToAdd);
};

studentObj.addHobby("traveling");
console.log(studentObj.hobbies);

studentObj.removeHobby("sports");
console.log(studentObj.hobbies);
console.log(studentObj.isActive);
studentObj.setStudentInactive();
console.log(studentObj.isActive);

studentObj.switchStudentActivity = function () {
  // if (this.isActive) {
  //   this.isActive = false
  // } else {
  //   this.isActive = true
  // }

  this.isActive = !this.isActive;
};

studentObj.switchStudentActivity();
console.log(studentObj.isActive);
studentObj.switchStudentActivity();
console.log(studentObj.isActive);
studentObj.switchStudentActivity();
console.log(studentObj.isActive);

console.log(studentObj.hobbies);

studentObj.addHobby = function (hobbyToAdd) {
  this.hobbies.push(hobbyToAdd);
};

studentObj.addHobby("traveling");
console.log(studentObj.hobbies);

studentObj.removeHobby("sports");
console.log(studentObj.hobbies);
