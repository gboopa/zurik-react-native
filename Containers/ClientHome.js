import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ZurikMap  from '../components/client/map'
import RegulationTrackers from './RegulationTracker'

export default class ClientHome extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.home}>
          <ZurikMap/>
        </View>
        <View style={styles.home}>
          <RegulationTrackers/>
        </View>        
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  header: {
    height: 80,
    width: 360,
    justifyContent: 'center',
    alignItems: 'center',    
  },
  home: {
    backgroundColor: '#232323'
  },
  main: {
    height: 200,
    width: 200,
    padding: 25,
    borderWidth: 25,
    borderColor: 'black',
    margin: 25,
    backgroundColor: '#232323'
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  footer: {
    height: 100,
    width: 200,
    backgroundColor: 'green'
  },
  text: {
    color: 'red',
    fontSize: 20
  }
});