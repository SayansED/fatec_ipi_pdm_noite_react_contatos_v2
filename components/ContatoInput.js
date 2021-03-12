import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ContatoInput = (props) => {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');

    const capturarNome = (nome) => {
        setNome(nome);
    };

    const capturarTelefone = (telefone) => {
        setTelefone(telefone);
    };
    return(
        <View>
            <TextInput 
                style={styles.nomeInput}
                placeholder="Digite seu nome"
                onChangeText={capturarNome}
                value={nome}
            />
            <TextInput 
                style={styles.telefoneInput}
                placeholder="Digite seu telefone"
                onChangeText={capturarTelefone}
                value={telefone}
            />
            <View styles={styles.buttonInput}>
                <Button 
                    title="Adcionar"
                    onPress={() => {
                        props.onAdcionarContato([nome, telefone]);
                        setNome('');
                        setTelefone('');
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    nomeInput:{
        marginTop: 25,
        padding: 10,
        width: 300,
      },
      
      telefoneInput:{
        marginTop: 25,
        padding: 10,
        width: 300,
      },

      buttonInput: {
        marginTop: 25,
      },
})

export default ContatoInput;