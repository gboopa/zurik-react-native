
import React, { Component } from 'react';
import { View, Text,ActivityIndicator,StyleSheet,Platform,TouchableHighlight } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content,Form, Item, Input, Label } from 'native-base';
import { connect } from 'react-redux';
import { getUser, addUser, updateUser } from '../actions';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Checkbox, {SelectedArray} from './form/checkbox';
// import { getUserDetail } from './reducer';

const subscription_props = [
  {label: 'Paid Subscription', value: 'paid' },
  {label: 'Free Trial ', value: 'free' }
];

const access_props = [
  {label: 'Full', value: 'full' },
  {label: 'Restricted ', value: 'restricted' }
]

const selectedArrayRef = new SelectedArray(); 

class UserDetail extends Component {
  static navigationOptions = {
    title: 'User Detail'
  };

  constructor(props) {
      super(props);
      const { params } = this.props.navigation.state;
    
      this.state = {
          // user_name: (params.edit) ? params.user.user_name : "",
          // email_id: (params.edit) ? params.user.email_id : "",
          // mobile_no: (params.edit) ? params.user.mobile_no : "",

          // company_name: (params.edit) ? params.user.company_name : 'others',
          // role_id: (params.edit) ? params.user.role_id : 3,
          // subscription: (params.edit) ? params.user.subscription : "",
          // access: (params.edit) ? params.user.access : "",
          // smsaccess: (params.edit) ? params.user.smsaccess : 'none',
          // webaccess: (params.edit) ? params.user.webaccess : 'none',
          // emailaccess: (params.edit) ? params.user.emailaccess : 'none',
          // country: (params.edit) ? params.user.country : 23,
          // geopgrpahy: (params.edit) ? params.user.geopgrpahy : '', 
          // state: (params.edit) ? params.user.state : 18              
          user_name: "",
          email_id:  "",
          mobile_no: "",

          company_name: 'others',
          role_id: 3,
          subscription: "",
          access: "",
          smsaccess: 'none',
          webaccess: 'none',
          emailaccess:'none',
          country: 23,
          geopgrpahy: '', 
          state: 18   

      };
      // console.log('props',props);
      // this.generateID = this.generateID.bind(this);
      // this.addUser = this.addUser.bind(this);
  }

  componentDidMount(){
    const {params} = this.props.navigation.state;
    console.log('==========params===');
    console.log(params);  
    console.log('id',params.user.id);
    this.props.getUser(global.url+"user/"+ params.user.id);

  }

  componentDidUpdate(){
    console.log('----did update---');
    console.log(this.props.user);
    if (Object.keys(this.props.user).length > 0)
    {
      this.setState({...this.props.user});
    }
  }

  // getSelectedItems()
  // {
  //   if( selectedArrayRef.getArray().length == 0 )
  //   {
  //     alert('No Item(s) Selected!');
  //   }
  //   else
  //   {
  //     console.log(selectedArrayRef.getArray());
  //   }    
  // }
  // componentDidMount() {
  //   this.props
  //     .getUserDetail('relferreira', 'react-native-redux')
  // }


  addUser() {
    const {params} = this.props.navigation.state;
      if (params.edit){
          // let user = params.user;
          // user['user_name'] = this.state.user_name;
          // user['email_id'] = this.state.email_id;
          // user['mobile_no'] = this.state.mobile_no;

          let user = {...this.state};

          user['user_id'] = user['id'];
          console.log('user model',user);
          // this.props.updateUser(user);
      }
      else{
          let user = {
            "user_name": user_name, 
            "email_id": this.state.email_id,
            "mobile_no": this.state.mobile_no,
            "company_name": 'others',
            "role_id": 3,
            "subscription": this.state.subscription,
            "access": this.state.access,
            "smsaccess": 'none',
            "webaccess": 'none',
            "emailaccess": 'none',
            "country": 23,
            "geopgrpahy": '', 
            "state": 18            
          };
          this.props.addUser(user);
      }
      this.props.navigation.navigate('userList')
  }

  render() {
    // const { userInfo, loadingInfo } = this.props;
    console.log('==========render');
    console.log(this.props);  
    if(this.props.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    // const {
    //   name,
    //   full_name,
    //   description,
    //   forks_count,
    //   stargazers_count
    // } = userInfo;
    if(this.props.isUpdating){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      )
    }    
    // if(this.props.userUpdated){
    //   this.props.navigation.goBack();
    // }

    return (
      <Container>
        <Header>
          <Right>
            <Button primary onPress={this.addUser}><Text> Save </Text></Button>
            <Button primary><Text> Delete </Text></Button>
            <Button primary onPress={() => this.props.navigation.goBack()}><Text> Cancel </Text></Button>
          </Right>
        </Header>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>User Name</Label>
              <Input 
                onChangeText={(text) => this.setState({user_name: text})}
                autoFocus={false}
                value={this.state.user_name}
              />
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input 
                onChangeText={(text) => this.setState({email_id: text})}
                value={this.state.email_id}
              /> 
            </Item>
            <Item stackedLabel>
              <Label>Mobile Number</Label>
              <Input 
                onChangeText={(text) => this.setState({mobile_no: text})}
                value={this.state.mobile_no}
              /> 
            </Item>
            <Item stackedLabel>
              <Label>Subscription</Label>
              <RadioForm formHorizontal={true} animation={true} >
                {subscription_props.map((obj, i) => {
                  var onPressSub = (value, index) => {
                      this.setState({
                        subscription: value,
                        subscriptionIndex: index
                      })
                    }
                  return (
                    <RadioButton labelHorizontal={true} key={i} >
                      {/*  You can set RadioButtonLabel before RadioButtonInput */}
                      <RadioButtonInput
                        obj={obj}
                        index={i}
                        isSelected={this.props.user.hasOwnProperty(obj.value) ? this.props.user.paid : !this.props.user.paid}
                        onPress={onPressSub}
                        buttonInnerColor={'#f39c12'}
                        buttonOuterColor={this.state.subscriptionIndex === i ? '#2196f3' : '#000'}
                        buttonSize={15}
                        buttonStyle={{}}
                        buttonWrapStyle={{marginLeft: 10}}
                      />
                      <RadioButtonLabel
                        obj={obj}
                        index={i}
                        onPress={onPressSub}
                        labelStyle={{fontWeight: 'bold', color: '#2ecc71'}}
                        labelWrapStyle={{}}
                      />
                    </RadioButton>
                  )
                })}
              </RadioForm>              
            </Item>
            <Item stackedLabel>
              <Label>Access</Label>
              <RadioForm formHorizontal={true} animation={true} >
                {access_props.map((obj, i) => {
                  var onPressAcc = (value, index) => {
                      this.setState({
                        access: value,
                        accessIndex: index
                      })
                    }
                  return (
                    <RadioButton labelHorizontal={true} key={i} >
                      {/*  You can set RadioButtonLabel before RadioButtonInput */}
                      <RadioButtonInput
                        obj={obj}
                        index={i}
                        isSelected={this.props.user.hasOwnProperty(obj.value) ? this.props.user.full : !this.props.user.full}
                        onPress={onPressAcc}
                        buttonInnerColor={'#f39c12'}
                        buttonOuterColor={this.state.accessIndex === i ? '#2196f3' : '#000'}
                        buttonSize={15}
                        buttonStyle={{}}
                        buttonWrapStyle={{marginLeft: 10}}
                      />
                      <RadioButtonLabel
                        obj={obj}
                        index={i}
                        onPress={onPressAcc}
                        labelStyle={{fontWeight: 'bold', color: '#2ecc71'}}
                        labelWrapStyle={{}}
                      />
                    </RadioButton>
                  )
                })}
              </RadioForm>              
            </Item>                     
            <View style = { styles.container }>
              <Checkbox size = { 20 } keyValue = { 1 } selectedArrayObject = { selectedArrayRef } color = "#636c72" label = "SMS"/>
              <Checkbox size = { 20 } keyValue = { 2 } selectedArrayObject = { selectedArrayRef } color = "#636c72" label = "Web"/>
              <Checkbox size = { 20 } keyValue = { 3 } selectedArrayObject = { selectedArrayRef } color = "#636c72" label = "Email"/>
            </View>

          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create(
{
  container:
  {
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    paddingHorizontal: 25,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  selectedArrayItemsBtn:
  {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignSelf: 'stretch'
  },

  btnText:
  {
    color: 'white',
    textAlign: 'center',
    alignSelf: 'stretch',
    fontSize: 18
  },

  checkBoxButton:
  {
    marginVertical: 10
  },

  checkBoxHolder:
  {
    flexDirection: 'row',
    alignItems: 'center'
  },

  checkedView:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  checkedImage:
  {
    height: '80%',
    width: '80%',
    tintColor: 'white',
    resizeMode: 'contain'
  },

  uncheckedView:
  {
    flex: 1,
    backgroundColor: 'white'
  },

  checkBoxLabel:
  {
    fontSize: 17,
    paddingLeft: 10
  }
});
// const mapStateToProps = ({ userInfo, loadingInfo }) => ({
//   userInfo,
//   loadingInfo
// });

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        hasErrored: state.userReducer.userErrored,
        isLoading: state.userReducer.userLoading,

        userUpdateErrored: state.userReducer.userUpdateErrored,
        isUpdating: state.userReducer.userUpdating
    };
};

// const mapDispatchToProps = {
//   getUserDetail
// };



//Connect everything
export default connect(mapStateToProps, {getUser,addUser, updateUser})(UserDetail);
// export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
// export default UserDetail; 