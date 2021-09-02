import {createStore} from 'redux'

const str = (state = 5, action,hello) => { 
    
    console.log(arguments[0]);
    
    return state
}

let store=createStore(str);
//console.log(arguments);
export default store;