import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContatoItem = (props) => {
    return(
        <TouchableOpacity onPress = {() => props.remove(props.chave)}>
            <View style={styles.itemNaLista}>
                <Text>Nome: {props.contato[0]}</Text>
                <Text>Telefone: {props.contato[1]}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemNaLista: {
      padding: 12,
      backgroundColor: '#DDD',
      borderColor: 'black',
      borderWidth: 1,
      marginBottom: 8,
      borderRadius: 16,
      alignItems: 'center'
    }
  });

export default ContatoItem;