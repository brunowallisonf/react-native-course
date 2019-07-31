import React, { Component } from 'react';
import {
  Text,
  View,
  Image,StyleSheet
} from 'react-native';


class Icone extends Component {
    render() {
      if (this.props.escolha == 'pedra') {
        return (<View style={styles.txtJogador}>
          <Text>Escolha do: {this.props.jogador}</Text>
          <Image source={require(`../../imgs/pedra.png`)}></Image>
        </View>)
      } else if (this.props.escolha == 'papel') {
       return (<View style={styles.txtJogador}>
          <Text >Escolha do: {this.props.jogador}</Text>
          <Image source={require(`../../imgs/papel.png`)}></Image>
        </View>)
      } else if (this.props.escolha == 'tesoura') {
        return (<View style={styles.txtJogador}>
          <Text>Escolha do: {this.props.jogador}</Text>
          <Image source={require(`../../imgs/tesoura.png`)}></Image>
        </View>)
      } else {
        return false
      }
  
    }
  }

const styles = StyleSheet.create({
    txtJogador: {
        alignItems: "center"
      },
      icone: {
          alignItems: 'center',
          marginBottom: 20
      }
})
export default Icone 
  