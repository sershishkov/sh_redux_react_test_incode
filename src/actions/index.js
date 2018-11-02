import axios from 'axios';
import { GET_CLIENTS_BY, GET_CLIENTS_ALL, GET_CLIENTS_DETAILS} from './types'
const URL = 'http://localhost:3004';



export function clientsListAll(){

  const request = axios.get(`${URL}/clients`)  
                  .then(response => response.data);
  return{
    type:GET_CLIENTS_ALL,
    payload:request
  }
};

export function findClientsBy(key){

  const request = axios.get(`${URL}/clients?q=${key}`)  
                  .then(response => response.data);
  return{
    type:GET_CLIENTS_BY,
    payload:request
  }
};

export function findClientsDetails(id){

  const request = axios.get(`${URL}/clients?q=${id}`)  
                  .then(response => response.data[0]);
                  
  return{
    type: GET_CLIENTS_DETAILS,
    payload: request
  }
};