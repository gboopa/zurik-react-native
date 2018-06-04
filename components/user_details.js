
import React, { Component } from 'react';
import { View, Text,ActivityIndicator,StyleSheet,Platform,TouchableHighlight,Picker } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content,Form, Item, Input, Label } from 'native-base';
import { connect } from 'react-redux';
import { getUser, addUser, updateUser,deleteUser, getLocations   } from '../actions/users';
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

const usergeoCollection = [];
const countryCollection = [];
const countryGeo = [];
const stateCollection = [];
const stateCountry = [];
const regCollection = [];
const regulationState = [];

const selectedArrayRef = new SelectedArray(); 

class UserDetail extends Component {
  static navigationOptions = {
    title: 'User Detail'
  };

  constructor(props) {
      super(props);
      const { params } = this.props.navigation.state;
      // this.isSaveOperation = false;
      this.state = {
        isLoading: true, 
        message: '', 
        user: {
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
          state: 18,
          regulation: ''             
        }
      };
      // this.state = {
      //     // user_name: (params.edit) ? params.user.user_name : "",
      //     // email_id: (params.edit) ? params.user.email_id : "",
      //     // mobile_no: (params.edit) ? params.user.mobile_no : "",

      //     // company_name: (params.edit) ? params.user.company_name : 'others',
      //     // role_id: (params.edit) ? params.user.role_id : 3,
      //     // subscription: (params.edit) ? params.user.subscription : "",
      //     // access: (params.edit) ? params.user.access : "",
      //     // smsaccess: (params.edit) ? params.user.smsaccess : 'none',
      //     // webaccess: (params.edit) ? params.user.webaccess : 'none',
      //     // emailaccess: (params.edit) ? params.user.emailaccess : 'none',
      //     // country: (params.edit) ? params.user.country : 23,
      //     // geopgrpahy: (params.edit) ? params.user.geopgrpahy : '', 
      //     // state: (params.edit) ? params.user.state : 18              
      //     user_name: "",
      //     email_id:  "",
      //     mobile_no: "",

      //     company_name: 'others',
      //     role_id: 3,
      //     subscription: "",
      //     access: "",
      //     smsaccess: 'none',
      //     webaccess: 'none',
      //     emailaccess:'none',
      //     country: 23,
      //     geopgrpahy: '', 
      //     state: 18   

      // };
      // console.log('props',props);
      // this.generateID = this.generateID.bind(this);

      this.addUser = this.addUser.bind(this);
      this.delUser = this.delUser.bind(this);
      // console.log('params',params);
      if (params && params.edit)
      {      
        fetch(global.url+"user/"+ params.user.id)
          .then((response) => { 
            console.log('response==============='); 
            console.log('response',response);
              if (!response.ok) {
                  throw Error(response.statusText);
              }
            // if (response.status==200) {
              
            //   proceed = true;
            // }
            // else this.setState({ message: response.message });
            return response.json()})
          .then((user) => {
              console.log('response.json',user);
              this.setState({ isLoading: false, user: {...this.state.user, ...user}})
              // if (proceed) this.props.navigation.navigate('drawerStack');
          })
          .catch(err => {
            this.setState({ message: err.message, isLoading: false  });
            // this.setState({ isLoading: false })
          });

      }
      else
      {
        this.state.isLoading = false;
      }
  }

  componentDidMount(){
    // const {params} = this.props.navigation.state;
    console.log('==========in did mount of User Detail===');
    // console.log(params);  
    // console.log('id',params.user.id);
    // this.props.getUser(global.url+"user/"+ params.user.id);
    // this.props.getUser(global.url);
    this.props.getLocations(global.url+'getRegbygeostate');


  }

  componentDidUpdate(){
    console.log('----did update of User detail---');
    console.log(this.props);

    // if (Object.keys(this.props.user).length > 0)
    // {
    //   this.setState({...this.props.user});
    // }
    if (this.props.saveSuccessful)
    {
      console.log('=======>>>>>>>>> naviating to list');
       this.props.navigation.navigate('userList');
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
      
      let user = {...this.state.user};
      user['subscription'] = user['paid'] ? 'paid' : 'free';
      user['access'] = user['full'] ? 'full' : 'restricted';      

      if (params.edit){
          // let user = params.user;
          // user['user_name'] = this.state.user_name;
          // user['email_id'] = this.state.email_id;
          // user['mobile_no'] = this.state.mobile_no;

          // let user = {...this.state.user};

          user['user_id'] = user['id'];
          // user['subscription'] = user['paid'] ? 'paid' : 'free';
          // user['access'] = user['full'] ? 'full' : 'restricted';
          console.log('user model',user);
          this.props.updateUser(user);
      }
      else{
          // let user = {
          //   "user_name": user_name, 
          //   "email_id": this.state.email_id,
          //   "mobile_no": this.state.mobile_no,
          //   "company_name": 'others',
          //   "role_id": 3,
          //   "subscription": this.state.subscription,
          //   "access": this.state.access,
          //   "smsaccess": 'none',
          //   "webaccess": 'none',
          //   "emailaccess": 'none',
          //   "country": 23,
          //   "geopgrpahy": '', 
          //   "state": 18            
          // };
          this.props.addUser(user);
      }
      // this.props.navigation.navigate('userList')
  }

  delUser() {
    this.props.deleteUser(this.state.user.id);
  }

  render() {
    // const { userInfo, loadingInfo } = this.props;
    console.log('==========render in User Detail==============');
    console.log(this.props);  
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    if ( typeof(this.props.locations) !== "undefined")
    {
      usergeoCollection = this.props.locations.usergeoCollection;
      countryCollection = this.props.locations.countryCollection;
      stateCollection = this.props.locations.stateCollection;
      regCollection = this.props.locations.regCollection;
    }

    // const {
    //   name,
    //   full_name,
    //   description,
    //   forks_count,
    //   stargazers_count
    // } = userInfo;
    if(this.props.isUpdating || this.props.isAdding || this.props.isDeleting){
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
        <Header style={{ backgroundColor: "#f44242" }}>
          <Right>
            <Button primary onPress={this.addUser}><Text> Save </Text></Button>
            {this.props.navigation.state.params.edit && <Button primary onPress={this.delUser}><Text> Delete </Text></Button>}
            <Button primary onPress={() => this.props.navigation.goBack()}><Text> Cancel </Text></Button>
          </Right>
        </Header>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>User Name</Label>
              <Input 
                onChangeText={(text) => this.setState({user: {...this.state.user, user_name: text}})}
                autoFocus={false}
                value={this.state.user.user_name}
              />
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input 
                onChangeText={(text) => this.setState({user: {...this.state.user, email_id: text}})}
                value={this.state.user.email_id}
              /> 
            </Item>
            <Item stackedLabel>
              <Label>Mobile Number</Label>
              <Input 
                onChangeText={(text) => this.setState({user: {...this.state.user, mobile_no: text}})}
                value={this.state.user.mobile_no}
              /> 
            </Item>
            <Item stackedLabel>
              <Label>Subscription</Label>
              <View style={{margin:5}} />
              <RadioForm formHorizontal={true} animation={true} >
                {subscription_props.map((obj, i) => {
                  var onPressSub = (value, index) => {
                      this.setState({
                        user: {...this.state.user, paid: (value=='paid'? true:false)},
                        subscriptionIndex: index
                      })
                    }
                  return (
                    <RadioButton labelHorizontal={true} key={i} >
                      {/*  You can set RadioButtonLabel before RadioButtonInput */}
                      <RadioButtonInput
                        obj={obj}
                        index={i}
                        isSelected={this.state.user.hasOwnProperty('paid')?(this.state.user.hasOwnProperty(obj.value) ? this.state.user.paid : !this.state.user.paid):false}
                        onPress={onPressSub}
                        buttonInnerColor={'#f39c12'}
                        buttonOuterColor={this.state.subscriptionIndex === i ? '#2196f3' : '#000'}
                        buttonSize={12}
                        buttonStyle={{}}
                        buttonWrapStyle={{marginLeft: 10}}
                      />
                      <RadioButtonLabel
                        obj={obj}
                        index={i}
                        onPress={onPressSub}
                        labelStyle={{}}
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
                        user: {...this.state.user, full: (value=='full'? true:false)},
                        accessIndex: index
                      })
                    }
                  return (
                    <RadioButton labelHorizontal={true} key={i} >
                      {/*  You can set RadioButtonLabel before RadioButtonInput */}
                      <RadioButtonInput
                        obj={obj}
                        index={i}
                        isSelected={this.state.user.hasOwnProperty('full')?(this.state.user.hasOwnProperty(obj.value) ? this.state.user.full : !this.state.user.full):false}
                        onPress={onPressAcc}
                        buttonInnerColor={'#f39c12'}
                        buttonOuterColor={this.state.accessIndex === i ? '#2196f3' : '#000'}
                        buttonSize={12}
                        buttonStyle={{}}
                        buttonWrapStyle={{marginLeft: 10}}
                      />
                      <RadioButtonLabel
                        obj={obj}
                        index={i}
                        onPress={onPressAcc}
                        labelStyle={{}}
                        labelWrapStyle={{}}
                      />
                    </RadioButton>
                  )
                })}
              </RadioForm>              
            </Item>                     
            { /*<View style = { styles.container }>
              <Checkbox size = { 20 } keyValue = { 1 } selectedArrayObject = { selectedArrayRef } color = "#636c72" label = "SMS"/>
              <Checkbox size = { 20 } keyValue = { 2 } selectedArrayObject = { selectedArrayRef } color = "#636c72" label = "Web"/>
              <Checkbox size = { 20 } keyValue = { 3 } selectedArrayObject = { selectedArrayRef } color = "#636c72" label = "Email"/>
            </View>
              */ }
            <Item stackedLabel>
              <Label>Geography</Label>
                <Picker 
                  selectedValue={this.state.user.geopgrpahy}
                  style={{ height: 20, width: 200 }}
                  onValueChange={(itemValue, itemIndex) => { countryGeo = countryCollection.filter(country => country.geo_id == itemValue);
                      console.log('yyyyyyyyy', countryGeo)
                      this.setState({user: {...this.state.user, geopgrpahy: itemValue, country:'',state:'',regulation:''}})}}>
                  <Picker.Item label="Select Geography" value="0" />
                  {usergeoCollection.map((object, i) => <Picker.Item label={object.name} value={object.id} />) }

                </Picker>
            </Item>
            <Item stackedLabel>
              <Label>Country</Label>
                <Picker
                  selectedValue={this.state.user.country}
                  style={{ height: 20, width: 200 }}
                  onValueChange={(itemValue, itemIndex) => 
                    {
                      stateCountry = stateCollection.filter(state => state.scid == itemValue);
                      this.setState({user: {...this.state.user, country: itemValue}})}}>
                  <Picker.Item label="Select Country" value="0" />
                  {countryGeo.map((object, i) => <Picker.Item label={object.name} value={object.id} />) }

                </Picker>
            </Item>
            <Item stackedLabel>
              <Label>State</Label>
                <Picker 
                  selectedValue={this.state.user.state}
                  style={{ height: 20, width: 200 }}
                  onValueChange={(itemValue, itemIndex) => 
                    {
                      regulationState = regCollection.filter(regulation => regulation.state_id == itemValue);
                      this.setState({user: {...this.state.user, state: itemValue}})}}>
                  <Picker.Item label="Select State" value="0" />                    
                  {stateCountry.map((object, i) => <Picker.Item label={object.name} value={object.id} />) }

                </Picker>
            </Item> 
            <Item stackedLabel>
              <Label>Regulation</Label>
                <Picker 
                  selectedValue={this.state.user.regulation}
                  style={{ height: 20, width: 200 }}
                  onValueChange={(itemValue, itemIndex) => {this.setState({user: {...this.state.user, regulation: itemValue}})}}>
                  <Picker.Item label="Select Regulation" value="0" />
                  {regulationState.map((object, i) => <Picker.Item label={object.name} value={object.id} />) }

                </Picker>
            </Item>                           
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
        userAddErrored: state.userReducer.userAddErrored,
        isAdding: state.userReducer.userAdding,
        saveSuccessful: state.userReducer.saveSuccessful,

        userUpdateErrored: state.userReducer.userUpdateErrored,
        isUpdating: state.userReducer.userUpdating,

        userDeleteErrored: state.userReducer.userDeleteErrored,
        isDeleting: state.userReducer.userDeleting,

        locations:state.userReducer.locations
    };
};

// const mapDispatchToProps = {
//   getUserDetail
// };



//Connect everything
export default connect(mapStateToProps, {getUser,addUser, updateUser,deleteUser,getLocations  })(UserDetail);
// export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
// export default UserDetail; 