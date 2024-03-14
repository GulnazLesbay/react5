

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExpenseItem from './ExpenseItem';
import { deleteExpense } from '../actions/expenseActions';

const ExpenseList = () => {
  const expenses = useSelector(state => state.expenses);
  const dispatch = useDispatch();
  const [sortType, setSortType] = useState('');

  const handleSortByAmount = () => {
    const sortedExpenses = [...expenses];
    sortedExpenses.sort((a, b) => a.amount - b.amount);
    setSortType(sortType === 'asc-amount' ? 'desc-amount' : 'asc-amount');

    if (sortType === 'asc-amount') {
      sortedExpenses.reverse();
    }

    dispatch({ type: 'SET_EXPENSES', payload: sortedExpenses });
  };

  const handleSortByDate = () => {
    const sortedExpenses = [...expenses];
    sortedExpenses.sort((a, b) => new Date(a.date) - new Date(b.date));
    setSortType(sortType === 'asc-date' ? 'desc-date' : 'asc-date');

    if (sortType === 'asc-date') {
      sortedExpenses.reverse();
    }

    dispatch({ type: 'SET_EXPENSES', payload: sortedExpenses });
  };

  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
  };

  return (
    <div>
      <button onClick={handleSortByAmount}>Sort by Amount</button>
      <button onClick={handleSortByDate}>Sort by Date</button>
      <ul>
        {expenses.map(expense => (
          <ExpenseItem key={expense.id} expense={expense} id={expense.id} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
