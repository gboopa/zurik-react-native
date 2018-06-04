import React from 'react'
import { FlatList, ActivityIndicator, StyleSheet, Text, View, Image,TouchableHighlight } from 'react-native'
import { connect } from 'react-redux';
import { getRegulationTrackers } from '../actions/regulations';

class RegulationTrackers extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state ={ isLoading: true}
  // }

  // static navigationOptions = {
  //   drawerLabel: 'RegulationTracker List',
  //   drawerIcon: () => (
  //     <Image
  //       source={{uri: 'https://dummyimage.com/60x60/000/fff.jpg&text=1'}}
  //       style={{width: 30, height: 10, borderRadius: 15}}
  //     />
  //   )
  // }

  componentDidMount(){
    // var urlo = 'http://192.168.0.25:1337/';
    // var urlh = 'http://192.168.43.220:1337/';
    console.log('~~~~~~~~~~~~~ did mount of RegulationTracker List ~~~~~~~~~~~');
    this.props.getRegulationTrackers(global.url+"library?geoId="+0);
         // return fetch('http://192.168.43.220:1337/regulationTracker?limit=8&offset=0')
    // return fetch('http://192.168.0.25:1337/regulationTracker?limit=8&offset=0')
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
    console.log('------------regulationTracker list redering called --------------------')
    // console.log(this.props);  

    return(
      <View style={{flex: 1,borderTopColor:'#777',borderTopWidth:5}}>
        <View>
          <Text  style={{fontSize: 20, color:'white'}}>Regulation Tracker</Text>
        </View>
        <FlatList
          data={this.props.regulationTrackers}
          renderItem={({item}) => 
            <TouchableHighlight onPress={() => this.props.navigation.navigate('regulationTrackerDetail', {regulationTracker: item, edit:true})} underlayColor='rgba(0,0,0,.2)'>
              <View   style={{borderBottomColor: 'black',borderBottomWidth: 1, margin:5, flexDirection:'row', justifyContent: 'space-around'}}>
                <Text style={styles.regulation}>{item.Domain}</Text>
                <Text style={styles.regulation}>{item.Regulations}</Text>
                <Text style={styles.regulation}>{item.Docs}</Text>
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
  regulation: {
    color:'white'
  }
})

const mapStateToProps = (state) => {
    return {
        regulationTrackers: state.regulationTrackerReducer.regulationTrackers,
        hasErrored: state.regulationTrackerReducer.regulationTrackersErrored,
        isLoading: state.regulationTrackerReducer.regulationTrackersLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getRegulationTrackers: (url) => dispatch(getRegulationTrackers(url))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegulationTrackers);