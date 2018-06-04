
import React, { Component } from 'react';
import { View, Text,ActivityIndicator,StyleSheet,Platform,TouchableHighlight } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content,Form, Item, Input, Label } from 'native-base';
import { connect } from 'react-redux';
import { getRegulation, addRegulation, updateRegulation,deleteRegulation } from '../actions/regulations';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Checkbox, {SelectedArray} from './form/checkbox';
// import { getRegulationDetail } from './reducer';

const selectedArrayRef = new SelectedArray(); 

class RegulationDetail extends Component {
  static navigationOptions = {
    title: 'Regulation Detail'
  };

  constructor(props) {
      super(props);
      const { params } = this.props.navigation.state;
      // this.isSaveOperation = false;
      this.state = {
          isLoading: true, 
          message: '', 
          regulation: {
          rdlid:"" ,
          geography_id:"" ,
          domain_id: "",
          domain_name: "",
          document_name: "",
          document_id: "",
          geography_name:"",
          regulation_id: "",
          regulation_name: "",
          country_name: "",
          country_id: "",
          state_name: "",
          state_id: "",
          regulator_name: "",
          regulator_id:"" ,
          sub_doc_name: "",
          sub_document_id:"" ,
          regulationStatus: ""            
        }
      };


      this.addRegulation = this.addRegulation.bind(this);
      this.delRegulation = this.delRegulation.bind(this);
      // console.log('params',params);
      if (params && params.edit)
      {      
        fetch(global.url+"regulation/"+ params.regulation.id)
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
          .then((regulation) => {
              console.log('response.json',regulation);
              this.setState({ isLoading: false, regulation: {...this.state.regulation, ...regulation}})
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
    console.log('==========in did mount of Regulation Detail===');
    // console.log(params);  
    // console.log('id',params.regulation.id);
    // this.props.getRegulation(global.url+"regulation/"+ params.regulation.id);
    this.props.getRegulation(global.url);


  }

  componentDidUpdate(){
    console.log('----did update of Regulation detail---');
    console.log(this.props);

    // if (Object.keys(this.props.regulation).length > 0)
    // {
    //   this.setState({...this.props.regulation});
    // }
    if (this.props.saveSuccessful)
    {
      console.log('=======>>>>>>>>> naviating to list');
       this.props.navigation.navigate('regulationList');
    }
  }


  // componentDidMount() {
  //   this.props
  //     .getRegulationDetail('relferreira', 'react-native-redux')
  // }


  addRegulation() {
      const {params} = this.props.navigation.state;
      
      let regulation = {...this.state.regulation};
  

      if (params.edit){


          regulation['regulation_id'] = regulation['id'];
          // regulation['subscription'] = regulation['paid'] ? 'paid' : 'free';
          // regulation['access'] = regulation['full'] ? 'full' : 'restricted';
          console.log('regulation model',regulation);
          this.props.updateRegulation(regulation);
      }
      else{

          this.props.addRegulation(regulation);
      }
      // this.props.navigation.navigate('regulationList')
  }

  delRegulation() {
    this.props.deleteRegulation(this.state.regulation.id);
  }

  render() {
    // const { regulationInfo, loadingInfo } = this.props;
    console.log('==========render in Regulation Detail==============');
    console.log(this.props);  
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }


    if(this.props.isUpdating || this.props.isAdding || this.props.isDeleting){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      )
    }    
    // if(this.props.regulationUpdated){
    //   this.props.navigation.goBack();
    // }

    return (
      <Container>
        <Header style={{ backgroundColor: "#f44242" }}>
          <Right>
            <Button primary onPress={this.addRegulation}><Text> Save </Text></Button>
            {this.props.navigation.state.params.edit && <Button primary onPress={this.delRegulation}><Text> Delete </Text></Button>}
            <Button primary onPress={() => this.props.navigation.goBack()}><Text> Cancel </Text></Button>
          </Right>
        </Header>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Regulation Name</Label>
              <Input 
                onChangeText={(text) => this.setState({regulation: {...this.state.regulation, regulation_name: text}})}
                autoFocus={false}
                value={this.state.regulation.regulation_name}
              />
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input 
                onChangeText={(text) => this.setState({regulation: {...this.state.regulation, email_id: text}})}
                value={this.state.regulation.email_id}
              /> 
            </Item>
            <Item stackedLabel>
              <Label>Mobile Number</Label>
              <Input 
                onChangeText={(text) => this.setState({regulation: {...this.state.regulation, mobile_no: text}})}
                value={this.state.regulation.mobile_no}
              /> 
            </Item>
            <Item stackedLabel>
              
            </Item>
            <Item stackedLabel>
              <Label>Access</Label>
           
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
// const mapStateToProps = ({ regulationInfo, loadingInfo }) => ({
//   regulationInfo,
//   loadingInfo
// });

const mapStateToProps = (state) => {
    return {
        regulationAddErrored: state.regulationReducer.regulationAddErrored,
        isAdding: state.regulationReducer.regulationAdding,
        saveSuccessful: state.regulationReducer.saveSuccessful,

        regulationUpdateErrored: state.regulationReducer.regulationUpdateErrored,
        isUpdating: state.regulationReducer.regulationUpdating,

        regulationDeleteErrored: state.regulationReducer.regulationDeleteErrored,
        isDeleting: state.regulationReducer.regulationDeleting,
    };
};

// const mapDispatchToProps = {
//   getRegulationDetail
// };



//Connect everything
export default connect(mapStateToProps, {getRegulation,addRegulation, updateRegulation,deleteRegulation})(RegulationDetail);
// export default connect(mapStateToProps, mapDispatchToProps)(RegulationDetail);
// export default RegulationDetail; 