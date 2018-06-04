import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './Redux'
// import createStore from './Redux'
/*
* Both of the following files work for react-navigation
* Routes will always be added and supported by modifying
* the AppNavigation file.  Special redux actions/reducers
* will be handled in Redux Navigation
*   // use this to use react-navigation no redux
*   import AppNavigation from './Navigation/AppNavigation'
*
*   // use this to use react-navigation with redux
*   import ReduxNavigation from './Navigation/ReduxNavigation'
*/

// We're going to use navigation with redux
// import ReduxNavigation from './Navigation/ReduxNavigation'

import AppNavigation from './Navigation/AppNavigation'
// create our store
// const store = createStore()
const store = configureStore();

// global.url = 'http://192.168.0.26:1337/';
global.url = 'http://192.168.43.220:1337/';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar barStyle='light-content' />
          <AppNavigation />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
