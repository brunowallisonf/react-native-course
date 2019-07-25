

import React from 'react';
import {View, Button, AppRegistry,TouchableOpacity, Image, Text} from 'react-native';

const Estilos = {
  principal: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
  },
 botao: {
  backgroundColor: '#538530',
  paddingVertical: 10,
  paddingHorizontal: 30,
  marginTop: 20
 },
 textoBotao: {
   color: 'white',
   fontSize: 20,
   fontWeight: 'bold'
 }
};

const gerarNovaFrase = () => {
  let number = Math.random();
  number = Math.floor(number * 4);

  var frases = ['aa','bb','cc','dd','ee']
  alert(frases[number])
}

const App = ()=>{
     const { principal,botao,textoBotao } = Estilos
    
    return (
    <View style={principal}>
      <Image source={require('./img/logo.png')} />
      <TouchableOpacity style={botao} onPress={gerarNovaFrase}>
        <Text style={textoBotao}>Nova Frase</Text>
      </TouchableOpacity>
    </View>
    );
}

AppRegistry.registerComponent('app2',() => App)