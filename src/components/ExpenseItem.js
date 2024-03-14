import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateExpense } from '../actions/expenseActions';

const ExpenseItem = ({ expense, id, onDelete }) => { 
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(expense.name);
  const [updatedAmount, setUpdatedAmount] = useState(expense.amount);

  const dispatch = useDispatch();

  const handleDelete = () => {
    onDelete(id); 
  };

  const handleUpdate = () => {
    dispatch(updateExpense({ ...expense, name: updatedName, amount: updatedAmount }));
    setIsEditing(false);
  };

  return (
    <li key={expense.id}>
      {isEditing ? (
        <div>
          <input type="text" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />
          <input type="number" value={updatedAmount} onChange={(e) => setUpdatedAmount(e.target.value)} />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <div>
          {expense.name} - ${expense.amount} ({expense.date})
          <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default ExpenseItem;
