const userInfo = {
  firstName: "Alex",
  lastName: "Morgan",
  monthlySalary: 25000,
  rentPays: function (amount) {
    this.monthlySalary = this.monthlySalary - amount;
    return this.monthlySalary;
  },
  buysFood: function (amount) {
    this.monthlySalary = this.monthlySalary - amount;
    return this.monthlySalary;
  },
};

// console.log(userInfo.rentPays(2000));

const newUserOneInfo = {
  firstName: "Martin",
  lastName: "Josef",
  monthlySalary: 12000,
};
const newUserTwoInfo = {
  firstName: "Ralf",
  lastName: "Rick",
  monthlySalary: 14000,
};

const newUserPayBill = userInfo.rentPays.bind(newUserOneInfo);
console.log(newUserPayBill(1500));
