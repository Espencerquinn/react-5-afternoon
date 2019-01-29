import {createStore} from 'redux'
import reducer from './ducks/reducer.js';


export default createStore(reducer); //passing reducer into store, you can create different reducer for different scenarios
//Dan Abermauf - created redux