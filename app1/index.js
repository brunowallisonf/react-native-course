import React from 'react';
import  { Text, AppRegistry, View, Button } from 'react-native';

const geraNumeroAleatorio = () =>{
    var numeroAleatorio = Math.random();
    numeroAleatorio = numeroAleatorio * 10;
    numeroAleatorio = Math.floor(numeroAleatorio);
    alert(numeroAleatorio)
    
}
const App = () => {
    return (
    <View>
        <Text> Gerador de números randômicos</Text>
        <Button title='Gerar um Número randomico' onPress={ geraNumeroAleatorio } />
    </View>
    );
};

AppRegistry.registerComponent('app1', () => App)