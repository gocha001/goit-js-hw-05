const getTotalBalanceByGender = (users, gender) => {
  // let totalBalance = 0;
  const usersBalance = users
    .filter((user) => user.gender === gender)
    .map((user) => user.balance)
    .reduce((total, num) => total + num, 0);
  // console.log(usersBalance);
  //
  // for (const balance of usersBalance) {
  // totalBalance += balance;
  // }
  return usersBalance;
};

const clients = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811,
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821,
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793,
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278,
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951,
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498,
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863
