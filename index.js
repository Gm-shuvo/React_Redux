const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

// actions 

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

const buyCake = () => {
  return {
    type: BUY_CAKE,
    payload: 'Redux action'
  }
}

const buyIceCreame = () => {
  return {
    type: BUY_ICECREAM,
    payload: 'Redux action'
  }
}

// reducer

const CakeinitialState = {
  numberOfCake: 10
}

const IceCreameinitialState = {
  numberOfIceCreame: 13
}

const cakeReducer = (state = CakeinitialState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numberOfCake: state.numberOfCake - 1
    }
      break;
  
    default: return state
      break;
  }
}

const iceCreamReducer = (state = IceCreameinitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numberOfIceCreame: state.numberOfIceCreame - 1
    }
      break;
  
    default: return state
      break;
  }
}

// combaine multiple reducer with combaine reducer

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCreame: iceCreamReducer
})

// CreateStore 

const store = createStore(rootReducer)

console.log('Initial value', store.getState());

const unsubscribed = store.subscribe(() => console.log('Update value', store.getState()))
//dispatch buycake
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

// dispatch 
store.dispatch(buyIceCreame())
store.dispatch(buyIceCreame())
store.dispatch(buyIceCreame())
unsubscribed()

