import React from 'react'
import { FlatList, ActivityIndicator, StyleSheet, Text, View, Image,TouchableHighlight } from 'react-native'
import { connect } from 'react-redux';
import { getUsers } from '../actions/users';

class Users extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state ={ isLoading: true}
  // }

  static navigationOptions = {
    drawerLabel: 'User List',
    drawerIcon: () => (
      <Image
        source={{uri: 'https://dummyimage.com/60x60/000/fff.jpg&text=1'}}
        style={{width: 30, height: 10, borderRadius: 15}}
      />
    )
  }

  componentDidMount(){
    // var urlo = 'http://192.168.0.25:1337/';
    // var urlh = 'http://192.168.43.220:1337/';
    console.log('~~~~~~~~~~~~~ did mount of User List ~~~~~~~~~~~');
    this.props.getUsers(global.url+"user?limit=8&offset=0");
         // return fetch('http://192.168.43.220:1337/user?limit=8&offset=0')
    // return fetch('http://192.168.0.25:1337/user?limit=8&offset=0')
    // .then(function(response){ console.log('response==============='); console.log(response); return response.json()})
    //   .then((responseJson) => {
    //     console.log('------------');
    //     console.log(responseJson);
    //     console.log('going to setState');
    //     this.setState({
    //       isLoading: false,
    //       dataSource: responseJson,
    //     }, function(){
    //       console.log('setState finished');
    //     });

    //   })
    //   .catch((error) =>{
    //     console.error(error);
    //   });
  }
  

  render(){

    if(this.props.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    console.log('------------user list redering called --------------------')
    // console.log(this.props);  

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <View>
          <Text  style={{fontSize: 27}}>User List</Text>
          <TouchableHighlight style={styles.addButton}
                              underlayColor='#ff7043' onPress={() => this.props.navigation.navigate('userDetail', {edit:false})}>
              <Text style={{fontSize: 15, color: 'white'}}>+</Text>
          </TouchableHighlight>
        </View>

        <FlatList
          data={this.props.users}
          renderItem={({item}) => 
            <TouchableHighlight onPress={() => this.props.navigation.navigate('userDetail', {user: item, edit:true})} underlayColor='rgba(0,0,0,.2)'>
              <View   style={{borderBottomColor: 'black',borderBottomWidth: 1, margin:5}}>
                <Text>{item.user_name}</Text>
                <Text>{item.email_id}</Text>
                <Text>{item.mobile_no}</Text>
              </View>
            </TouchableHighlight>
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
      backgroundColor: '#ff5722',
      borderColor: '#ff5722',
      borderWidth: 1,
      height: 40,
      width: 40,
      borderRadius: 40 / 2,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
      right: 20,
      shadowColor: "#000000",
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
          height: 1,
          width: 0
      }
  }  
})

const mapStateToProps = (state) => {
    return {
        users: state.userReducer.users,
        hasErrored: state.userReducer.usersErrored,
        isLoading: state.userReducer.usersLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (url) => dispatch(getUsers(url))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);