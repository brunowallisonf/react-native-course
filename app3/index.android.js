import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  
} from 'react-native';

import Topo from './src/components/topo'
import Icone from './src/components/icone'
class MeuComponente extends Component {
  render() {

  }
}


class app3 extends Component {
  constructor(props) {
    super(props)
    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' }
  }
  jokenpo(escolhaUsuario) {
    let randomNumber = Math.floor(Math.random() * 3)
    var escolhaComputador = ''
    switch (randomNumber) {
      case 0: escolhaComputador = 'pedra'; break;

      case 2: escolhaComputador = 'papel'; break;

      default: escolhaComputador = 'tesoura';
    }
    var resultado = ''
    if (escolhaComputador == 'pedra') {
      if (escolhaUsuario == 'pedra') {
        resultado = 'Empate'
      } else if (escolhaUsuario == 'papel') {
        resultado = 'Usuário ganhou'
      } else {
        resultado = 'Computador ganhou'
      }
    }
    if (escolhaComputador == 'papel') {
      if (escolhaUsuario == 'pedra') {
        resultado = 'Computador ganhou'
      } else if (escolhaUsuario == 'papel') {
        resultado = 'Empate'
      } else {
        resultado = 'Usuário ganhou'
      }
    }
    if (escolhaComputador == 'tesoura') {
      if (escolhaUsuario == 'pedra') {
        resultado = 'Usuário ganhou'
      } else if (escolhaUsuario == 'papel') {
        resultado = 'Computador ganhou'
      } else {
        resultado = 'Empate'
      }
    }
    this.setState({ escolhaUsuario, escolhaComputador, resultado })
  }
  render() {
    return (

      <View>
        <Topo></Topo>


        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title='Pedra' onPress={() => this.jokenpo('pedra')} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title='Papel' onPress={() => this.jokenpo('papel')} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title='Tesoura' onPress={() => this.jokenpo('tesoura')} />
          </View>

        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
          <Icone escolha={this.state.escolhaUsuario} jogador='Usuario'></Icone>
        </View>


      </View>

    );
  }

}



const styles = StyleSheet.create({
  btnEscolha: {
    width: 80
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  },
  
})
AppRegistry.registerComponent('app3', () => app3);
