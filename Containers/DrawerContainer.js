import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class DrawerContainer extends React.Component {

  logout = () => {
    // This will reset back to loginStack
    // https://github.com/react-community/react-navigation/issues/1127
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null,  // black magic
      actions: [NavigationActions.navigate({ routeName: 'loginStack' })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text
          onPress={() => navigation.navigate('users')}
          style={styles.uglyDrawerItem}>
          User Management
        </Text>
        <Text
          onPress={() => navigation.navigate('regulations')}
          style={styles.uglyDrawerItem}>
          Regulation Management
        </Text>
        <Text
          onPress={() => navigation.navigate('documentUpload')}
          style={styles.uglyDrawerItem}>
          Document Upload Management
        </Text>
        <Text
          onPress={this.logout}
          style={styles.uglyDrawerItem}>
          Log Out
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 10,
    paddingHorizontal: 20
  },
  uglyDrawerItem: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#E73536',
    padding: 8,
    margin: 5,
    borderRadius: 2,
    borderColor: '#E73536',
    borderWidth: 1,
    textAlign: 'center'
  }
})
