import React from 'react'
import { StyleSheet, Text, View,Picker } from 'react-native'
// import { connect } from 'react-redux';
// import { getRegulations } from '../actions/regulations';

class RegulationItem extends React.Component {

  constructor(props){
    super(props);
    this.state ={ regulation_status: this.props.regulation_status}
  }

  render(){


    console.log('------------regulation item redering called --------------------')
    // console.log(this.props);  

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <Picker
          selectedValue={this.state.regulation_status}
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

export default RegulationItem;