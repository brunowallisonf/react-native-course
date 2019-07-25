
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MeuComponente extends Component{
  render(){
    return (
      <View> 
        <Text>{this.props.propriedade1}</Text>
        <Text>{this.props.propriedade2}</Text>
      </View>
    )
  }
}


export default class app3 extends Component {
 
  render() {
    return (
     <MeuComponente propriedade1='Banana' propriedade2='Macã'> </MeuComponente>
    );
  }
}


AppRegistry.registerComponent('app3', () => app3);
