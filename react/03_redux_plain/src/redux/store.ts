import { createStore } from 'redux';
import counterReducer from './counterReducer';

// Creazione dello store
const store = createStore(counterReducer);

export default store;
