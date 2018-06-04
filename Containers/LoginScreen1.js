import React from 'react'
import { StyleSheet, ScrollView,  Text, TextInput,  View,  Button, ActivityIndicator } from 'react-native'

export default class LoginScreen extends React.Component {

  state = {
      username: '',
      password: '',
      isLoggingIn: false,
      message: ''
  }  
  _userLogin = () => {

    this.setState({ isLoggingIn: true, message: '' });

    // var params = {
    //     username: this.state.username,
    //     password: this.state.password
    // };

    // var formBody = [];
    // for (var property in params) {
    //     var encodedKey = encodeURIComponent(property);
    //     var encodedValue = encodeURIComponent(params[property]);
    //     formBody.push(encodedKey + "=" + encodedValue);
    // }
    // formBody = formBody.join("&");

    var formBody = JSON.stringify({
        email_id: this.state.username,
        password: this.state.password
    });
    var proceed = false;
    // fetch("https://"+Environment.CLIENT_API+"/oauth/token", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         body: formBody
    //     })
    
    // var urlo = 'http://192.168.0.25:1337/locallogin';
    // var urlh = 'http://192.168.43.220:1337/locallogin';
      fetch(global.url+'locallogin', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: formBody
        })
        .then((response) => { 
          console.log('response==============='); 
          console.log('response.json',response);
          if (response.status==200) {
            
            proceed = true;
          }
          else this.setState({ message: response.message });
          return response.json()})
        .then((response) => {
            console.log('response.json',response);
            this.setState({ isLoggingIn: false })
            if (proceed) this.props.navigation.navigate('drawerStack');
        })
        .catch(err => {
          this.setState({ message: err.message });
          this.setState({ isLoggingIn: false })
        });
      }

  render() {
    return (

        <ScrollView style={styles.scroll}>
            <Text 
              style={{fontSize: 27}}>
              Login
            </Text>
            <TextInput
              ref={component => this._username = component}
              placeholder='Username' 
              onChangeText={(username) => this.setState({username})}
              autoFocus={false}
              onFocus={this.clearUsername}
            />
            <TextInput 
              ref={component => this._password = component}
              placeholder='Password' 
              onChangeText={(password) => this.setState({password})}
              secureTextEntry={true}
              onFocus={this.clearPassword}
              onSubmitEditing={this._userLogin}
            />
            {!!this.state.message && (
              <Text
                style={{fontSize: 14, color: 'red', padding: 5}}>
                {this.state.message}
              </Text>
            )}
            {this.state.isLoggingIn && <ActivityIndicator />}
            <View style={{margin:9}} />
            <Button 
              disabled={this.state.isLoggingIn||!this.state.username||!this.state.password}
                  onPress={this._userLogin}
                  title="Submit"
                />

            <Text
              style={styles.linky}
              onPress={() => this.props.navigation.navigate('forgottenPasswordScreen')} >
              Go to Forgot Password
            </Text>

            <Text
              style={styles.linky}
              onPress={() => this.props.navigation.navigate('drawerStack')} >
              Pretend we logged in
            </Text>
          </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  linky: {
    color: 'blue',
    paddingTop: 10
  },
  scroll: {
        padding: 20
  }
})
