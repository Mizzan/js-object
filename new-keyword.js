// new key word uses into native code to create objects or other types of types

// creating constructor function [ also called native code ]
// function CreatePlayers(name, age, club, nation, position) {
//   this.name = name;
//   this.age = age;
//   this.club = club;
//   this.nation = nation;
//   this.position = position;
// }

// const playerOne = new CreatePlayers(
//   "Mizan",
//   23,
//   "FC Barcelona",
//   "Bangladesh",
//   "Striker"
// );
// const playerTwo = new CreatePlayers(
//   "Maruf",
//   35,
//   "FC Bayarn Munich",
//   "Germany",
//   "Striker"
// );

// console.log(playerTwo);

// creating with ES6 classes - it is an template

class CreatePlayers {
  constructor(name, age, club, nation) {
    this.name = name;
    this.age = age;
    this.club = club;
    this.nation = nation;
  }
}

const playerOne = new CreatePlayers("Messi", 34, "Fc Barcelona", "Argentina");
console.log(playerOne);
