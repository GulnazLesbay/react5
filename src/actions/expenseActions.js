export const addExpense = (expense) => {
    return {
      type: 'ADD_EXPENSE',
      payload: expense
    };
  };
  
  export const deleteExpense = (id) => {
    return {
      type: 'DELETE_EXPENSE',
      payload: id
    };
  };
  
  export const updateExpense = (expense) => {
    return {
      type: 'UPDATE_EXPENSE',
      payload: expense
    };
  };
  