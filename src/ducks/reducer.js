//This object is being updated - state

const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: 'aa',
    lastName: '',
    email: ''
 } 

 //action types - methods that can be 
const UPDATE_LOAN_TYPE= "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE="UPDATE_PROPERTY_TYPE";
const UPDATE_CITY= "UPDATE_CITY";
const UPDATE_PROP="UPDATE_PROP";
const UPDATE_FOUND="UPDATE_FOUND";


//below gives the reducer function state and action
//You pass in the action into the switch staement 
function reducer(state = initialState, action){ //passing in state reference and method to be invoked 
    switch (action.type){
        case UPDATE_LOAN_TYPE:
            return Object.assign( {}, state, {loanType: action.payload}); //payload is data being sent to the reducer
            //takes in most right part of an object and and merges to left- whatever is the most 
            //left object will be updated
            //https://repl.it/@SpencerQuinn/Redux-Theory-Objectassign?language=javascript&folderId=
        case UPDATE_PROPERTY_TYPE:
            return Object.assign( {}, state, { propertyType: action.payload});
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload});
        case UPDATE_PROP:
            return Object.assign({}, state, {propToBeUsedOn: action.payload})

        default: return state;
    }
}

export function updateLoanType(loanType){
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}

export function updatePropertyType (property) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property 
    };
}

export function updateCity (city) {
    return{
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateProp (prop) {
    return {
        type: UPDATE_PROP,
        payload: prop
    }
}

export function updateFound (found){
    return {
        type: UPDATE_FOUND,
        payload: found
    }
}

export default reducer; //store needs to be able to access reducer 