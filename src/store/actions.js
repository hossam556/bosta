import * as actionTypes from './actionTypes'
import axios from 'axios'

export const searchHandlerSuccess = (charge)=>{
    return{
        type : actionTypes.SEARCH_HANDLER,
        charge : charge
    }
}

export const searchHandler =(value)=>{
    return dispatch=>{
          
     axios.get(`https://tracking.bosta.co/shipments/track/${value}`).then(response=>{
             dispatch(searchHandlerSuccess(response.data));
             console.log(response.data)
     }).catch(error =>{
         console.log(error)
 
     })
 }}