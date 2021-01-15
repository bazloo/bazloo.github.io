import { createStore, combineReducers } from 'redux';
import quotesBoxReduser from './quotesBox-reduser';

let redusers = combineReducers({ newQuote: quotesBoxReduser});
let store = createStore(redusers);

export default store;