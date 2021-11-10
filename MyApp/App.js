import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, FlatList } from 'react-native';


import  api from './src/services/api';
import Lista from './src/Lista';

class App extends Component{
  constructor(props){
    super(props);

    // Armazenamento e exibição
    this.state = {
      lista: []
    }
  }

  async componentDidMount(){
    const response = await api.get('users');
    this.setState({
      lista: response.data
    })
  }


  render(){
    return(
        <View style={styles.container}>
          <FlatList
            data={this.state.lista}
            keyExtractor={item => item.id.toString()}
            renderItem={ ({item}) => <Lista data={item} /> }         
          />
          
        </View>

    )
  }  
}

  export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',

  },
});
