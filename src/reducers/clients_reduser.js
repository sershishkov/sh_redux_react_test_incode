import { GET_CLIENTS_BY, GET_CLIENTS_ALL} from '../actions/types'



export default function(state = {}, action ){

  switch(action.type){
    case GET_CLIENTS_ALL: 
      return {
        ...state,
          clientstList: action.payload}
    case GET_CLIENTS_BY: 
         return {
           ...state,
           clientstList: action.payload}
         
    default: return state;
  }

}