const accounts = [
  {
    id: 1,
    user_id: 1,
    name: "Cox Cable",
    account_number: "2001-3323-423-45455",
    phone: "7028768987",
    address: "4345 Stree Name",
    city: "North Las Vegas",
    state: "Nevada",
    zip: "89081",
    status: 1,
    auto_pay: false,
    notes: [1]
  },
  {
    id: 2,
    user_id: 2,
    name: "Costello Realty",
    account_number: "1234567890abcd",
    phone: "7027879876",
    address: "234 Main St",
    city: "Las Vegas",
    state: "Nevada",
    zip: "89122",
    status: 1,
    auto_pay: false,
    notes: [2]
  }
];

const users = [
  {
    id: 1,
    email: "user1@gmail.com",
    username: "user1",
    password: "password1",
    first_name: "user",
    last_name: "one",
    address: "783 Lake St",
    city: "Las Vegas",
    state: "Nevada",
    zip: "89117",
    subscribed: true,
    confirmed: true,
    registration_key: "ukwQYYh?O_x^8zQbB",
    role: "user",
    account_type: "free",
    status: 1
  },
  {
    id: 2,
    email: "user2@gmail.com",
    username: "user2",
    password: "password2",
    first_name: "user",
    last_name: "two",
    address: "12 Las Vegas Blvd",
    city: "Las Vegas",
    state: "Nevada",
    zip: "89222",
    subscribed: true,
    confirmed: true,
    registration_key: "3>KE$Jb,KRK1f,*X3",
    role: "user",
    account_type: "free",
    status: 1
  }
];

const bills = [
  {
    id: 1,
    account_id: 1,
    user_id: 1,
    due_date: "2019-06-17",
    close_date: null,
    amount: "129.09",
    due: "129.09",
    notes: [3],
    status: 1
  },
  {
    id: 2,
    account_id: 2,
    user_id: 2,
    due_date: "2019-05-13",
    close_date: null,
    amount: "1500",
    due: "1500",
    notes: [4],
    status: 1
  }
];

const notes = [
  {
    id: 1,
    note: "Find a cheaper provider"
  },
  {
    id: 2,
    note: "Due on the 1st of every month"
  },
  {
    id: 3,
    note: "Wow there internet sucks"
  },
  {
    id: 4,
    note: "For the month of June"
  }
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  accounts,
  users,
  bills,
  notes
};
