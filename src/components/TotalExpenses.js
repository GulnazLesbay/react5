import React from 'react';
import { useSelector } from 'react-redux';

function TotalExpenses() {
  const expenses = useSelector(state => state.expenses);
  const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);

  return (
    <div>
      <h2>Total Expenses</h2>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default TotalExpenses;
