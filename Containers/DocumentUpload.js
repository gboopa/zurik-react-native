import React from 'react'
import { FlatList, ActivityIndicator, StyleSheet, Text, View, Image,TouchableHighlight } from 'react-native'
import { connect } from 'react-redux';
import { getDocumentUploads } from '../actions/documentUploads';

class DocumentUploads extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state ={ isLoading: true}
  // }

  static navigationOptions = {
    drawerLabel: 'DocumentUpload List',
    drawerIcon: () => (
      <Image
        source={{uri: 'https://dummyimage.com/60x60/000/fff.jpg&text=1'}}
        style={{width: 30, height: 10, borderRadius: 15}}
      />
    )
  }

  componentDidMount(){

    console.log('~~~~~~~~~~~~~ did mount of DocumentUpload List ~~~~~~~~~~~');
    this.props.getDocumentUploads(global.url+"document?limit=8&offset=0");

  }
  

  render(){

    if(this.props.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    console.log('------------documentUpload list redering called --------------------')
    // console.log(this.props);  

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <View>
          <Text  style={{fontSize: 27}}>Document Upload List</Text>
          <TouchableHighlight style={styles.addButton}
                              underlayColor='#ff7043' onPress={() => this.props.navigation.navigate('documentUploadDetail', {edit:false})}>
              <Text style={{fontSize: 15, color: 'white'}}>+</Text>
          </TouchableHighlight>
        </View>

        <FlatList
          data={this.props.documentUploads}
          renderItem={({item}) => 
            <TouchableHighlight onPress={() => this.props.navigation.navigate('documentUploadDetail', {documentUpload: item, edit:true})} underlayColor='rgba(0,0,0,.2)'>
              <View   style={{borderBottomColor: 'black',borderBottomWidth: 1, margin:5}}>
                <Text>{item.gname +':'+item.dname +':'+item.stname}</Text>
                 <Text>{item.rname +':'+item.regtrName }</Text>
                <Text>{item.fname}</Text>
                <Text>{item.docname}</Text>
                <Text>{item.regtrName}</Text>
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
        documentUploads: state.documentUploadReducer.documentUploads,
        hasErrored: state.documentUploadReducer.documentUploadsErrored,
        isLoading: state.documentUploadReducer.documentUploadsLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getDocumentUploads: (url) => dispatch(getDocumentUploads(url))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DocumentUploads);      