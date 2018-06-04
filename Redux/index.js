import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}
// // Wherever you build your reducers
// import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
// import AppNavigation from '../Navigation/AppNavigation'

// const navReducer = (state, action) => {
//   const newState = AppNavigation.router.getStateForAction(action, state)
//   return newState || state
// }

// export default () => {
//   /* ------------- Assemble The Reducers ------------- */
//   const rootReducer = combineReducers({
//     nav: navReducer
//   })

//   // return store
//   return createStore(rootReducer)
// }

