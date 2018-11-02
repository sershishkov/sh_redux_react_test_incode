import { combineReducers } from 'redux';
import clients from './clients_reduser';
import client from './clientDetail_reducer';


const rootReducer = combineReducers({
  clients,
  client
});

export default rootReducer;