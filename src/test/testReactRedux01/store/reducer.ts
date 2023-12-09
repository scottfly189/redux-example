import {stateTye,actionType,actionItemType} from './action'

const initState: stateTye = {
    desc:"this is a private redux demo",
    count:0
}



const reducer = (state:stateTye=initState,action:actionType)=> {
    switch(action.type) {
        case 'INCREMENT':
            return {...state,count:state.count+action.payload}
        default:
            return state;
    }
}

export default reducer