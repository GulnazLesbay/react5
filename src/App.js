import React, { useState } from 'react';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import TotalExpenses from './components/TotalExpenses';
import './App.css';


function App() {
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('date');

  return (
    <div className="button-container"> 
    <div className="container"> {/* Добавляем класс container */}
    {/* <div className="button-container">  */}
    <div>
      <h1>Expense Tracker</h1>
      <TotalExpenses />
      <AddExpenseForm />
      <h2>Filter and Sort Expenses</h2>
      <input type="text" placeholder="Search" value={filter} onChange={(e) => setFilter(e.target.value)} />
      {/* <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
      </select> */}
      <ExpenseList filter={filter} sortBy={sortBy} />
    </div>
    </div>
    </div>
  );
  
}

export default App;
