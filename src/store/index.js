import {createStore,applyMiddleware} from "redux"
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let initState = {
  list:[]
}

function reducer(state=initState,action){
  // 深拷贝
  state = JSON.parse(JSON.stringify(state));
  if(action.type==='SET_LIST'){
    state.list = action.list
  }
  return state
}

const store = createStore(reducer,applyMiddleware(logger,thunk))
export default store