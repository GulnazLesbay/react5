import { createStore } from 'redux';
import expenseReducer from '../reducers/expenseReducer';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('expenses');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('expenses', serializedState);
  } catch (err) {
  }
};

const persistedState = loadState();

const store = createStore(
  expenseReducer,
  persistedState
);

store.subscribe(() => {
  saveState({
    expenses: store.getState().expenses
  });
});

export default store;
