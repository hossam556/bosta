import * as actionTypes from './actionTypes';

const initialState = {
   charge :{}
};


const reducer = (state =initialState, action)=> {
       switch(action.type){
            case actionTypes.SEARCH_HANDLER :
                return {
                    ...state ,
                   charge: action.charge
                }; 
            default : 
               return state ;    
       }
};

export default reducer ;