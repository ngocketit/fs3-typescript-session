import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createRootReducer, {CharacterState} from './reducer'

export type AppState = {
  character: CharacterState
}

const initState: AppState = {
  character: {
    data: {},
    loading: false,
  }
}

export default function makeStore(initialState: AppState = initState) {
  let composeEnhancers = compose

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }
  const middlewares = [thunk]

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  return store
}
