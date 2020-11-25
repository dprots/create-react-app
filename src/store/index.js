import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {postReduser} from './reducers/post'

const rootReducer = combineReducers({
    post: postReduser
})

export default createStore(rootReducer, applyMiddleware(thunk))
