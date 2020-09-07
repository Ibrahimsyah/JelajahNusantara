import 'react-native-gesture-handler';
import React from 'react';
import Router from './src/routers'
import Reducers from './src/store/reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

export default () => {
  const store = createStore(Reducers)
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
