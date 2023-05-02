import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React from 'react';

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 120,
      date: new Date(2022, 7, 14),
    },
    { 
      id: "e2", 
      title: "New TV", 
      amount: 22000, 
      date: new Date(2022, 2, 12) 
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 50000,
      date: new Date(2022, 3, 19),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 8000,
      date: new Date(2022, 5, 12),
    },
  ];
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'Let\'s get started!'),
  //   React.createElement(Expenses, { items: expenses})
  // );

  const addExpenseHandler = expense => {
    console.log('In App.js File');
    console.log(expense);
  }
  
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
