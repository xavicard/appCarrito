import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import combineReducers from './reducers/indexReducer'


const store=createStore(
    combineReducers,
    compose( applyMiddleware(thunk)) 
)

export default store;