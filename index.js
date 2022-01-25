const redux = require('redux')
const createStore = redux.createStore
// actions 

const BUY_CAKE = 'BUY_CAKE'

const buyCake = () => {
  return {
    type: BUY_CAKE,
    payload: 'Redux action'
  }
}

// reducer

const initialState = {
  numberOfCake: 10
}

const reducer = (state = initialState, action) => {
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

// CreateStore 

const store = createStore(reducer)

console.log('Initial value', store.getState());

const unsubscribed = store.subscribe(() => console.log('Update value', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribed()
store.dispatch(buyCake())

