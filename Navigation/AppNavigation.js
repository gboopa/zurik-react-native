import React from 'react'
import { Text, Animated, Easing } from 'react-native'
import { StackNavigator, DrawerNavigator,TabNavigator } from 'react-navigation'
import LoginScreen from '../Containers/LoginScreen'
import SignupScreen from '../Containers/SignupScreen'
import ForgottenPasswordScreen from '../Containers/ForgottenPasswordScreen'
import Users from '../Containers/Users'
import Regulations from '../Containers/Regulations'
import DocumentUpload from '../Containers/DocumentUpload'
import UserDetail from '../components/user_details'
import RegulationDetail from '../components/regulation_details'
import DrawerContainer from '../Containers/DrawerContainer'
import ClientHome from '../Containers/ClientHome'
// import TabNavigator from 'react-native-tab-navigator'

// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})


// -------------
// Admin related screen navigations
const UserStack = StackNavigator(
{
  userList: {
    screen: Users
  },
  userDetail: {
    screen: UserDetail
  },
},
{
  headerMode: 'none',
});

const RegulationStack = StackNavigator(
{
  regulationList: {
    screen: Regulations
  },
  regulationDetail: {
    screen: RegulationDetail
  },
},
{
  headerMode: 'none',
});

// drawer stack
const DrawerStack = DrawerNavigator({
  users: { screen: UserStack },
  regulations: { screen: RegulationStack },
  documentUpload: { screen: DocumentUpload },
}, {
  gesturesEnabled: false,
  contentComponent: DrawerContainer
})

const drawerButton = (navigation) =>
  <Text
    style={{padding: 5, color: 'white'}}
    onPress={() => {
      // Coming soon: navigation.navigate('DrawerToggle')
      // https://github.com/react-community/react-navigation/pull/2492
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }
    }
  }>Menu</Text>


const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#A52A2A'},
    title: 'Zurik',
    headerTintColor: 'white',
    gesturesEnabled: false,
    headerLeft: drawerButton(navigation)
  })
})

// login stack
const LoginStack = StackNavigator({
  loginScreen: { screen: LoginScreen },
  signupScreen: { screen: SignupScreen },
  forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: '#E73536'},
    title: 'ZURIK',
    headerTintColor: 'white'
  }
})

// Client side navigation
// -----------------------
// const ClientStack = StackNavigator ({
//   home: {screen: ClientHome},

//   },
//   {
//     headerMode: 'none',
//     navigationOptions: {
//       headerStyle: {backgroundColor: '#fff'},
//       title: 'ZURIK',
//       headerTintColor: 'white'    
//   }
// })

// this is new version code. gives error
// const ClientStack = createMaterialTopTabNavigator({
//   home: ClientHome
  
// })

// // TabNavigator is depricated.... but working fine
const ClientStack = TabNavigator({

  home: {screen:ClientHome},
  regulations: {screen:ClientHome},
  search: {screen:ClientHome}
},
{
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'red',
  }
  });

// Manifest of possible screens
// -----------------------------
const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation },
  client: {screen: ClientStack}
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack',
  transitionConfig: noTransitionConfig
})

export default PrimaryNav
