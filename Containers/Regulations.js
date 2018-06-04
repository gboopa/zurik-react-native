import React from 'react'
import { FlatList, ActivityIndicator, StyleSheet, Text, View, Image,TouchableHighlight,Picker } from 'react-native'
import { connect } from 'react-redux';
import { getRegulations } from '../actions/regulations';
// import { RegulationItem } from '../components/regulation_item';

class Regulations extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  static navigationOptions = {
    drawerLabel: 'Regulation List',
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
    console.log('~~~~~~~~~~~~~ did mount of Regulation List ~~~~~~~~~~~');
    this.props.getRegulations(global.url+"regulations?limit=8&offset=0");
         // return fetch('http://192.168.43.220:1337/regulation?limit=8&offset=0')
    // return fetch('http://192.168.0.25:1337/regulation?limit=8&offset=0')
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
    console.log('------------regulation list redering called --------------------')
    // console.log(this.props);  

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <View>
          <Text  style={{fontSize: 27}}>Regulation List</Text>
          <TouchableHighlight style={styles.addButton}
                              underlayColor='#ff7043' onPress={() => this.props.navigation.navigate('regulationDetail', {edit:false})}>
              <Text style={{fontSize: 15, color: 'white'}}>+</Text>
          </TouchableHighlight>
        </View>

        <FlatList
          data={this.props.regulations}
          renderItem={({item}) => 
            <TouchableHighlight onPress={() => this.props.navigation.navigate('regulationDetail', {regulation: item, edit:true})} underlayColor='rgba(0,0,0,.2)'>
              <View   style={{borderBottomColor: 'black',borderBottomWidth: 1, margin:5}}>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
                <RegulationItem regulation_status={item.regulation_status}>
                </RegulationItem>
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
        regulations: state.regulationReducer.regulations,
        hasErrored: state.regulationReducer.regulationsErrored,
        isLoading: state.regulationReducer.regulationsLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getRegulations: (url) => dispatch(getRegulations(url))
    };
};

class RegulationItem extends React.Component {

  constructor(props){
    super(props);
    console.log('passed value------------------>>',this.props);
    this.state ={ regulation_status: this.props.regulation_status};
    console.log('state value------------------>>',this.state);
  }

  render(){


    console.log('------------regulation item redering called --------------------')
    console.log('##################',this.state.regulation_status);  

    return(
      <View style={{flex: 1, paddingTop:5}}>
        <Picker
          selectedValue={this.state.regulation_status.toString()}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => this.setState({regulation_status: itemValue})}>
          <Picker.Item label="Upcoming" value="1" />
          <Picker.Item label="Ongoing" value="2" />
          <Picker.Item label="Completed" value="3" />
          <Picker.Item label="Not Applicable" value="4" />
        </Picker>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Regulations);