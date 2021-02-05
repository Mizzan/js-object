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

console.log(userInfo.rentPays(2000));
