const redux = require('redux');
const createStore = redux.createStore;

const initialState={
    result:1,
    lastValues:[]
}
// Reducer
const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case "LOGIN":
        state.result+= action.payload;
        break;
    }
    return state;
};
//Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(()=>{
    // type:'LOGIN';payload:2
    console.log("Store Updated!",store.getState());
});

//Dispatching Action
store.dispatch({type: 'LOGIN',payload:1});
console.log(store.getState());

