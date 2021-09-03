import {createStore} from 'redux'
import CartedProductReducer from './Reducers/CartedProduct';
const store = createStore(CartedProductReducer);
export default store;