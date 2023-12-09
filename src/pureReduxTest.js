/**
 * create store using node.js
 * demonstrate usage createStore,getState,dispath and replaceReducer functions.
 */

const {createStore} =require("redux")


const INCREMENT_COUNT = 'increment_count'

const initStateCreator = (initState)=>{
    return {
        name: initState,
        count: 0
    }
}

const reducer1 = (state=initStateCreator("reducer1"),action)=> {
    switch(action.type) {
        case INCREMENT_COUNT:
            return {...state,count:state.count+action.payload}
        default:
            return state
    }
}

const reducer2 = (state=initStateCreator("reducer2"),action) => {
    switch(action.type) {
        case INCREMENT_COUNT:
            return {name:'in reducer2',count:state.count+action.payload+2}
        default:
            return state
    }
}

const store = createStore(reducer1)

const subcribAction = ()=> {
    console.log('====================================');
    console.log(`the new state value is:${store.getState()}`);
    console.log('====================================');
}

store.subscribe(subcribAction)
console.log(store)    //there are four functions in the store.
console.log(store.getState())  //view the value of state.
store.dispatch({type:INCREMENT_COUNT,payload:1})
console.log(store.getState())  //view the change value of state.
store.replaceReducer(reducer2)
console.log(store.getState())
store.dispatch({type:INCREMENT_COUNT,payload:1});
console.log(store.getState())
