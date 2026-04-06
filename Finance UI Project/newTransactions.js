const categories = [
  { name: "Food", emoji: "🍔" ,src : "./images/food.png" },
  { name: "Shopping", emoji: "🛍️",src : "./images/shopping-bags.png"  },
  { name: "Bills", emoji: "💡",src : "./images/bill.png"  },
  { name: "Entertainment", emoji: "🎬",src : "./images/cinema.png"  },
  { name: "Health", emoji: "💊",src : "./images/meds.png"  },
  { name: "Groceries", emoji: "🛒",src : "./images/cart.png"  },
  { name: "Travel", emoji: "✈️",src : "./images/tram-car.png"  },
  { name: "Education", emoji: "📚",src : "./images/books.png"  },
  { name: "Salary", emoji: "💵",src : "./images/salary.png"  },
  { name: "Savings", emoji: "🏦",src : "./images/bank.png"  },
  { name: "Rent", emoji: "🏠",src : "./images/rent.png"  },
  { name: "Pets", emoji: "🐶",src : "./images/dog.png"  },
  { name: "Fuel", emoji: "⛽",src : "./images/fuel.png"  },
  { name: "Charity", emoji: "🙏",src : "./images/charity.png"  },
  { name: "Miscellaneous", emoji: "📦",src : "./images/misc.png"  }
];

const transactionsData = 
[
    {
        "id": 1,
        "img": "./images/salary.png",
        "category": "Salary",
        "date": "2025-04-01",
        "amount": 50000,
        "type": "Income"
    },
    {
        "id": 2,
        "img": "./images/salary.png",
        "category": "Salary",
        "date": "2025-04-02",
        "amount": 7000,
        "type": "Income"
    },
    {
        "id": 3,
        "img": "./images/rent.png",
        "category": "Rent",
        "date": "2025-04-02",
        "amount": 20000,
        "type": "Expense"
    },
    {
        "id": 4,
        "img": "./images/food.png",
        "category": "Food",
        "date": "2025-04-03",
        "amount": 1200,
        "type": "Expense"
    },
    {
        "id": 5,
        "img": "./images/shopping-bags.png",
        "category": "Shopping",
        "date": "2025-04-05",
        "amount": 4500,
        "type": "Expense"
    },
    {
        "id": 6,
        "img": "./images/bill.png",
        "category": "Bills",
        "date": "2025-04-08",
        "amount": 3500,
        "type": "Expense"
    },
    {
        "id": 7,
        "img": "./images/cinema.png",
        "category": "Entertainment",
        "date": "2025-04-10",
        "amount": 2000,
        "type": "Expense"
    },
    {
        "id": 8,
        "img": "./images/meds.png",
        "category": "Health",
        "date": "2025-04-12",
        "amount": 1500,
        "type": "Expense"
    },
    {
        "id": 9,
        "img": "./images/cart.png",
        "category": "Groceries",
        "date": "2025-04-14",
        "amount": 3200,
        "type": "Expense"
    },
    {
        "id": 10,
        "img": "./images/bank.png",
        "category": "Savings",
        "date": "2025-04-20",
        "amount": 5000,
        "type": "Saving"
    },
    {
        "id": 11,
        "img": "./images/tram-car.png",
        "category": "Travel",
        "date": "2025-04-22",
        "amount": 8000,
        "type": "Expense"
    },
    {
        "id": 12,
        "img": "./images/salary.png",
        "category": "Salary",
        "date": "2025-05-01",
        "amount": 50000,
        "type": "Income"
    },
    {
        "id": 13,
        "img": "./images/rent.png",
        "category": "Rent",
        "date": "2025-05-02",
        "amount": 20000,
        "type": "Expense"
    },
    {
        "id": 14,
        "img": "./images/books.png",
        "category": "Education",
        "date": "2025-05-03",
        "amount": 3000,
        "type": "Expense"
    },
    {
        "id": 15,
        "img": "./images/food.png",
        "category": "Food",
        "date": "2025-05-05",
        "amount": 1300,
        "type": "Expense"
    },
    {
        "id": 16,
        "img": "./images/shopping-bags.png",
        "category": "Shopping",
        "date": "2025-05-07",
        "amount": 4200,
        "type": "Expense"
    },
    {
        "id": 17,
        "img": "./images/bill.png",
        "category": "Bills",
        "date": "2025-05-10",
        "amount": 3600,
        "type": "Expense"
    },
    {
        "id": 18,
        "img": "./images/bank.png",
        "category": "Savings",
        "date": "2025-05-12",
        "amount": 5000,
        "type": "Saving"
    },
    {
        "id": 19,
        "img": "./images/cinema.png",
        "category": "Entertainment",
        "date": "2025-05-15",
        "amount": 1800,
        "type": "Expense"
    },
    {
        "id": 20,
        "img": "./images/meds.png",
        "category": "Health",
        "date": "2025-05-18",
        "amount": 1200,
        "type": "Expense"
    },
    {
        "id": 21,
        "img": "./images/salary.png",
        "category": "Salary",
        "date": "2025-06-01",
        "amount": 50000,
        "type": "Income"
    },
    {
        "id": 22,
        "img": "./images/rent.png",
        "category": "Rent",
        "date": "2025-06-02",
        "amount": 20000,
        "type": "Expense"
    },
    {
        "id": 23,
        "img": "./images/food.png",
        "category": "Food",
        "date": "2025-06-03",
        "amount": 1400,
        "type": "Expense"
    },
    {
        "id": 24,
        "img": "./images/cart.png",
        "category": "Groceries",
        "date": "2025-06-05",
        "amount": 3500,
        "type": "Expense"
    },
    {
        "id": 25,
        "img": "./images/fuel.png",
        "category": "Fuel",
        "date": "2025-06-07",
        "amount": 2500,
        "type": "Expense"
    },
    {
        "id": 26,
        "img": "./images/bank.png",
        "category": "Savings",
        "date": "2025-06-10",
        "amount": 5000,
        "type": "Saving"
    },
    {
        "id": 27,
        "img": "./images/misc.png",
        "category": "Miscellaneous",
        "date": "2025-06-12",
        "amount": 1200,
        "type": "Expense"
    },
    {
        "id": 28,
        "img": "./images/charity.png",
        "category": "Charity",
        "date": "2025-06-15",
        "amount": 1000,
        "type": "Expense"
    },
    {
        "id": 29,
        "img": "./images/cinema.png",
        "category": "Entertainment",
        "date": "2025-06-18",
        "amount": 2000,
        "type": "Expense"
    },
    {
        "id": 30,
        "img": "./images/salary.png",
        "category": "Salary",
        "date": "2025-07-01",
        "amount": 50000,
        "type": "Income"
    },
    {
        "id": 31,
        "img": "./images/rent.png",
        "category": "Rent",
        "date": "2025-07-02",
        "amount": 20000,
        "type": "Expense"
    },
    {
        "id": 32,
        "img": "./images/food.png",
        "category": "Food",
        "date": "2025-07-04",
        "amount": 1300,
        "type": "Expense"
    },
    {
        "id": 33,
        "img": "./images/shopping-bags.png",
        "category": "Shopping",
        "date": "2025-07-06",
        "amount": 4000,
        "type": "Expense"
    },
    {
        "id": 34,
        "img": "./images/bill.png",
        "category": "Bills",
        "date": "2025-07-08",
        "amount": 3600,
        "type": "Expense"
    },
    {
        "id": 35,
        "img": "./images/bank.png",
        "category": "Savings",
        "date": "2025-07-12",
        "amount": 5000,
        "type": "Saving"
    },
    {
        "id": 36,
        "img": "./images/meds.png",
        "category": "Health",
        "date": "2025-07-14",
        "amount": 1500,
        "type": "Expense"
    },
    {
        "id": 37,
        "img": "./images/books.png",
        "category": "Education",
        "date": "2025-07-18",
        "amount": 3000,
        "type": "Expense"
    },
    {
        "id": 38,
        "img": "./images/salary.png",
        "category": "Salary",
        "date": "2025-08-01",
        "amount": 50000,
        "type": "Income"
    },
    {
        "id": 39,
        "img": "./images/rent.png",
        "category": "Rent",
        "date": "2025-08-02",
        "amount": 20000,
        "type": "Expense"
    },
    {
        "id": 40,
        "img": "./images/food.png",
        "category": "Food",
        "date": "2025-08-03",
        "amount": 1400,
        "type": "Expense"
    },
    {
        "id": 41,
        "img": "./images/cart.png",
        "category": "Groceries",
        "date": "2025-08-05",
        "amount": 3600,
        "type": "Expense"
    },
    {
        "id": 42,
        "img": "./images/bank.png",
        "category": "Savings",
        "date": "2025-08-10",
        "amount": 5000,
        "type": "Saving"
    },
    {
        "id": 43,
        "img": "./images/tram-car.png",
        "category": "Travel",
        "date": "2025-08-12",
        "amount": 8000,
        "type": "Expense"
    },
    {
        "id": 44,
        "img": "./images/cinema.png",
        "category": "Entertainment",
        "date": "2025-08-15",
        "amount": 2000,
        "type": "Expense"
    },
    {
        "id": 45,
        "img": "./images/dog.png",
        "category": "Pets",
        "date": "2025-08-18",
        "amount": 1000,
        "type": "Expense"
    },
    {
        "id": 46,
        "img": "./images/salary.png",
        "category": "Salary",
        "date": "2025-09-01",
        "amount": 50000,
        "type": "Income"
    },
    {
        "id": 47,
        "img": "./images/rent.png",
        "category": "Rent",
        "date": "2025-09-02",
        "amount": 20000,
        "type": "Expense"
    },
    {
        "id": 48,
        "img": "./images/food.png",
        "category": "Food",
        "date": "2025-09-03",
        "amount": 1300,
        "type": "Expense"
    },
    {
        "id": 49,
        "img": "./images/shopping-bags.png",
        "category": "Shopping",
        "date": "2025-09-06",
        "amount": 4500,
        "type": "Expense"
    },
    {
        "id": 50,
        "img": "./images/bill.png",
        "category": "Bills",
        "date": "2025-09-08",
        "amount": 3600,
        "type": "Expense"
    },
    {
        "id": 51,
        "img": "./images/bank.png",
        "category": "Savings",
        "date": "2025-09-12",
        "amount": 5000,
        "type": "Saving"
    },
    {
        "id": 52,
        "img": "./images/cinema.png",
        "category": "Entertainment",
        "date": "2025-09-15",
        "amount": 2200,
        "type": "Expense"
    },
    {
        "id": 53,
        "img": "./images/meds.png",
        "category": "Health",
        "date": "2025-09-18",
        "amount": 1400,
        "type": "Expense"
    },
    {
        "id": 54,
        "img": "./images/salary.png",
        "category": "Salary",
        "date": "2025-10-01",
        "amount": 50000,
        "type": "Income"
    },
    {
        "id": 55,
        "img": "./images/rent.png",
        "category": "Rent",
        "date": "2025-10-02",
        "amount": 20000,
        "type": "Expense"
    },
    {
        "id": 56,
        "img": "./images/food.png",
        "category": "Food",
        "date": "2025-10-03",
        "amount": 1400,
        "type": "Expense"
    },
    {
        "id": 57,
        "img": "./images/cart.png",
        "category": "Groceries",
        "date": "2025-10-05",
        "amount": 3700,
        "type": "Expense"
    },
    {
        "id": 58,
        "img": "./images/bank.png",
        "category": "Savings",
        "date": "2025-10-10",
        "amount": 5000,
        "type": "Saving"
    },
    {
        "id": 59,
        "img": "./images/cinema.png",
        "category": "Entertainment",
        "date": "2025-10-12",
        "amount": 2000,
        "type": "Expense"
    },
    {
        "id": 60,
        "img": "./images/books.png",
        "category": "Education",
        "date": "2025-10-15",
        "amount": 3000,
        "type": "Expense"
    },
    {
        "id": 61,
        "img": "./images/dog.png",
        "category": "Pets",
        "date": "2025-10-18",
        "amount": 900,
        "type": "Expense"
    },
    {
        "id": 62,
        "img": "./images/salary.png",
        "category": "Salary",
        "date": "2025-11-01",
        "amount": 50000,
        "type": "Income"
    },
    {
        "id": 63,
        "img": "./images/rent.png",
        "category": "Rent",
        "date": "2025-11-02",
        "amount": 20000,
        "type": "Expense"
    },
    {
        "id": 64,
        "img": "./images/food.png",
        "category": "Food",
        "date": "2025-11-03",
        "amount": 1300,
        "type": "Expense"
    },
    {
        "id": 65,
        "img": "./images/shopping-bags.png",
        "category": "Shopping",
        "date": "2025-11-05",
        "amount": 4500,
        "type": "Expense"
    },
    {
        "id": 66,
        "img": "./images/bill.png",
        "category": "Bills",
        "date": "2025-11-08",
        "amount": 3600,
        "type": "Expense"
    },
    {
        "id": 67,
        "img": "./images/bank.png",
        "category": "Savings",
        "date": "2025-11-12",
        "amount": 5000,
        "type": "Saving"
    },
    {
        "id": 68,
        "img": "./images/cinema.png",
        "category": "Entertainment",
        "date": "2025-11-15",
        "amount": 2200,
        "type": "Expense"
    },
    {
        "id": 69,
        "img": "./images/misc.png",
        "category": "Miscellaneous",
        "date": "2025-11-18",
        "amount": 1200,
        "type": "Expense"
    },
    {
        "id": 70,
        "img": "./images/salary.png",
        "category": "Salary",
        "date": "2025-12-01",
        "amount": 50000,
        "type": "Income"
    },
    {
        "id": 71,
        "img": "./images/rent.png",
        "category": "Rent",
        "date": "2025-12-02",
        "amount": 20000,
        "type": "Expense"
    },
    {
        "id": 72,
        "img": "./images/food.png",
        "category": "Food",
        "date": "2025-12-03",
        "amount": 1400,
        "type": "Expense"
    },
    {
        "id": 73,
        "img": "./images/cart.png",
        "category": "Groceries",
        "date": "2025-12-05",
        "amount": 3700,
        "type": "Expense"
    },
    {
        "id": 74,
        "img": "./images/bank.png",
        "category": "Savings",
        "date": "2025-12-10",
        "amount": 5000,
        "type": "Saving"
    },
    {
        "id": 75,
        "img": "./images/tram-car.png",
        "category": "Travel",
        "date": "2025-12-12",
        "amount": 8000,
        "type": "Expense"
    },
    {
        "id": 76,
        "img": "./images/cinema.png",
        "category": "Entertainment",
        "date": "2025-12-15",
        "amount": 2000,
        "type": "Expense"
    },
    {
        "id": 77,
        "img": "./images/meds.png",
        "category": "Health",
        "date": "2025-12-18",
        "amount": 1500,
        "type": "Expense"
    },
    {
        "id": 78,
        "img": "./images/salary.png",
        "category": "Salary",
        "date": "2026-01-01",
        "amount": 50000,
        "type": "Income"
    },
    {
        "id": 79,
        "img": "./images/rent.png",
        "category": "Rent",
        "date": "2026-01-02",
        "amount": 20000,
        "type": "Expense"
    },
    {
        "id": 80,
        "img": "./images/food.png",
        "category": "Food",
        "date": "2026-01-03",
        "amount": 1400,
        "type": "Expense"
    },
    {
        "id": 81,
        "img": "./images/shopping-bags.png",
        "category": "Shopping",
        "date": "2026-01-05",
        "amount": 4000,
        "type": "Expense"
    },
    {
        "id": 82,
        "img": "./images/bank.png",
        "category": "Savings",
        "date": "2026-01-10",
        "amount": 5000,
        "type": "Saving"
    },
    {
        "id": 83,
        "img": "./images/cinema.png",
        "category": "Entertainment",
        "date": "2026-01-12",
        "amount": 2100,
        "type": "Expense"
    },
    {
        "id": 84,
        "img": "./images/books.png",
        "category": "Education",
        "date": "2026-01-15",
        "amount": 3000,
        "type": "Expense"
    },
    {
        "id": 85,
        "img": "./images/dog.png",
        "category": "Pets",
        "date": "2026-01-18",
        "amount": 1000,
        "type": "Expense"
    },
    {
        "id": 86,
        "img": "./images/salary.png",
        "category": "Salary",
        "date": "2026-02-01",
        "amount": 50000,
        "type": "Income"
    },
    {
        "id": 87,
        "img": "./images/rent.png",
        "category": "Rent",
        "date": "2026-02-02",
        "amount": 20000,
        "type": "Expense"
    },
    {
        "id": 88,
        "img": "./images/food.png",
        "category": "Food",
        "date": "2026-02-03",
        "amount": 1300,
        "type": "Expense"
    },
    {
        "id": 89,
        "img": "./images/cart.png",
        "category": "Groceries",
        "date": "2026-02-05",
        "amount": 3600,
        "type": "Expense"
    },
    {
        "id": 90,
        "img": "./images/bank.png",
        "category": "Savings",
        "date": "2026-02-10",
        "amount": 5000,
        "type": "Saving"
    },
    {
        "id": 91,
        "img": "./images/cinema.png",
        "category": "Entertainment",
        "date": "2026-02-12",
        "amount": 2000,
        "type": "Expense"
    },
    {
        "id": 92,
        "img": "./images/meds.png",
        "category": "Health",
        "date": "2026-02-15",
        "amount": 1500,
        "type": "Expense"
    },
    {
        "id": 93,
        "img": "./images/misc.png",
        "category": "Miscellaneous",
        "date": "2026-02-18",
        "amount": 1200,
        "type": "Expense"
    },
    {
        "id": 94,
        "img": "./images/salary.png",
        "category": "Salary",
        "date": "2026-03-01",
        "amount": 50000,
        "type": "Income"
    },
    {
        "id": 95,
        "img": "./images/rent.png",
        "category": "Rent",
        "date": "2026-03-02",
        "amount": 20000,
        "type": "Expense"
    },
    {
        "id": 96,
        "img": "./images/food.png",
        "category": "Food",
        "date": "2026-03-03",
        "amount": 1400,
        "type": "Expense"
    },
    {
        "id": 97,
        "img": "./images/shopping-bags.png",
        "category": "Shopping",
        "date": "2026-03-05",
        "amount": 4500,
        "type": "Expense"
    },
    {
        "id": 98,
        "img": "./images/bank.png",
        "category": "Savings",
        "date": "2026-03-10",
        "amount": 5000,
        "type": "Saving"
    },
    {
        "id": 99,
        "img": "./images/cinema.png",
        "category": "Entertainment",
        "date": "2026-03-12",
        "amount": 2200,
        "type": "Expense"
    },
    {
        "id": 100,
        "img": "./images/books.png",
        "category": "Education",
        "date": "2026-03-15",
        "amount": 3000,
        "type": "Expense"
    },
    {
        "id": 101,
        "img": "./images/dog.png",
        "category": "Pets",
        "date": "2026-03-18",
        "amount": 1000,
        "type": "Expense"
    },
    {
        "id": 102,
        "img": "./images/salary.png",
        "category": "Salary",
        "date": "2026-04-01",
        "amount": 50000,
        "type": "Income"
    },
    {
        "id": 103,
        "img": "./images/rent.png",
        "category": "Rent",
        "date": "2026-04-02",
        "amount": 20000,
        "type": "Expense"
    },
    {
        "id": 104,
        "img": "./images/food.png",
        "category": "Food",
        "date": "2026-04-02",
        "amount": 1400,
        "type": "Expense"
    },
    {
        "id": 105,
        "img": "./images/cart.png",
        "category": "Groceries",
        "date": "2026-04-02",
        "amount": 3600,
        "type": "Expense"
    },
    {
        "id": 106,
        "img": "./images/bank.png",
        "category": "Savings",
        "date": "2026-04-03",
        "amount": 5000,
        "type": "Saving"
    },
    {
        "id": 107,
        "img": "./images/cinema.png",
        "category": "Entertainment",
        "date": "2026-04-03",
        "amount": 2100,
        "type": "Expense"
    },
    {
        "id": 108,
        "img": "./images/meds.png",
        "category": "Health",
        "date": "2026-04-03",
        "amount": 1500,
        "type": "Expense"
    },
    {
        "id": 109,
        "img": "./images/misc.png",
        "category": "Miscellaneous",
        "date": "2026-04-04",
        "amount": 1200,
        "type": "Expense"
    }
]


function getMonth(date) {
  return date.slice(0, 7);
}


const balanceTrendData = [
  { month: "2025-04", balance: 13100 },
  { month: "2025-05", balance: 14900 },
  { month: "2025-06", balance: 18400 },
  { month: "2025-07", balance: 16600 },
  { month: "2025-08", balance: 14000 },
  { month: "2025-09", balance: 17000 },
  { month: "2025-10", balance: 19000 },
  { month: "2025-11", balance: 17200 },
  { month: "2025-12", balance: 13400 },
  { month: "2026-01", balance: 18500 },
  { month: "2026-02", balance: 20400 },
  { month: "2026-03", balance: 17900 },
  { month: "2026-04", balance: 20200 }
];


const incomeExpenseData = [
  { month: "2025-04", income: 50000, expense: 43900 },
  { month: "2025-05", income: 50000, expense: 35100 },
  { month: "2025-06", income: 50000, expense: 31600 },
  { month: "2025-07", income: 50000, expense: 33400 },
  { month: "2025-08", income: 50000, expense: 36000 },
  { month: "2025-09", income: 50000, expense: 33000 },
  { month: "2025-10", income: 50000, expense: 31000 },
  { month: "2025-11", income: 50000, expense: 32800 },
  { month: "2025-12", income: 50000, expense: 36600 },
  { month: "2026-01", income: 50000, expense: 31500 },
  { month: "2026-02", income: 50000, expense: 29600 },
  { month: "2026-03", income: 50000, expense: 32100 },
  { month: "2026-04", income: 50000, expense: 29800 }
];


//for donut chart

const expenseData = transactionsData
  .filter(t => t.type === "Expense")
  .reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = 0;
    }
    acc[curr.category] += curr.amount;
    return acc;
  }, {});

const labelsPie = Object.keys(expenseData);
const valuesPie = Object.values(expenseData);