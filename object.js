const userInfo = {
  firstName: "Alex",
  lastName: "Morgan",
  monthlySalary: 25000,
  rentPays: function (amount) {
    this.monthlySalary = this.monthlySalary - amount;
    return this.monthlySalary;
  },
  buysFood: function (amount, tips, tax) {
    this.monthlySalary = this.monthlySalary - amount - tips - tax;
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

// we need to assign the function and create an instance of that function for doing so using .bind
// const newUserPayBill = userInfo.rentPays.bind(newUserOneInfo);
// console.log(newUserPayBill(1500));

// .call and .apply both works pretty same whereas
// .call starts with c and c stats with comma, arguments passed in with comma in call
// but with .call we can directly use that function without creating an instance
userInfo.buysFood.call(newUserTwoInfo, 3000, 50, 100);
console.log(newUserTwoInfo.monthlySalary);
