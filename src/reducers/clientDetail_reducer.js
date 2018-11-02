import { GET_CLIENTS_DETAILS } from '../actions/types'


export default function(state = {}, action ){

  switch(action.type){
    case GET_CLIENTS_DETAILS:      
      return {
        ...state,
         clientDetail: action.payload
        
        }
     
      
    
         
    default: return state;
  }

}