import { v4 as uuidv4 } from 'uuid';
const initialState = {
    expenses: []
  };
  
  const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            const newExpense = {
              ...action.payload,
              id: uuidv4()
            };
            return {
              ...state,
              expenses: [...state.expenses, newExpense]
            };
        case 'DELETE_EXPENSE':
            return {
              ...state,
              expenses: state.expenses.filter(expense => expense.id !== action.payload)
            };
          
      case 'UPDATE_EXPENSE':
        return {
          ...state,
          expenses: state.expenses.map(expense =>
            expense.id === action.payload.id ? action.payload : expense
          )
        };

        case 'SET_EXPENSES':
            return {
              ...state,
              expenses: action.payload
            };
          

      default:
        return state;
    }
  };
  
  export default expenseReducer;
  