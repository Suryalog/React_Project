import { createStore } from 'redux';
import { bankReducer } from './bankSlice';
 
const store = createStore(bankReducer);
 
export default store;