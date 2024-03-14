import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../actions/expenseActions';

function AddExpenseForm() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      name: name,
      amount: amount,
      date: new Date().toLocaleDateString()
    };
    dispatch(addExpense(newExpense));
    setName('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Expense Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpenseForm;
