import {createStore} from 'redux'

const str = (state = 0, action) => { 
    
    console.log(state);
    
    return state
}

let store=createStore(str);
//console.log(arguments);
export default store;