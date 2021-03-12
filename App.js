import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import ContatoInput from './components/ContatoInput';
import ContatoItem from './components/ContatoItem';

export default function App() {

    const [contatos, setContatos] = useState([]);
    const [contadorContatos, setContadorContatos] = useState(0);

    // Version Old
    /*
    const adcionarContato = () => {
        var contato = {nome: nome, telefone: telefone};
        setContatos(contatos => {
            setContadorContatos(contadorContatos + 2);
            return [{key: contadorContatos.toString(), value: contato},...contatos];
        });
        console.log(contato); // visualizar 
    }
    */

    const adcionarContato = (contato) => {
      setContatos((contatos) => {
        setContadorContatos(contadorContatos + 2);
        return [{key: contadorContatos.toString(), value: contato}, ...contatos];
      });
      console.log(contato); // visualizar
    };

    const removerContato = (keyASerRemovida) => {
      setContatos((contatos) => {
        return contatos.filter((contato) => {
          return contato.key !== keyASerRemovida;
        });
      });
    };

    return(
        <View style={styles.container}>
          <Text 
            style={{
              fontSize: 20,
              fontWeight: "bold"
            }}
              >Insira o contato</Text>
            <ContatoInput onAdcionarContato={adcionarContato} />
            <Text style={styles.subTitle}>Contatos</Text>
            <FlatList
                data={contatos}
                renderItem={
                    (contato) => (
                   <ContatoItem 
                      contato={contato.item.value}
                      chave={contato.item.key}
                      remove={removerContato}
                   />
                    )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 25,
    },

    subTitle: {
      fontWeight: "bold",
      fontSize: 20,
      marginTop: 50,
      marginBottom: 25
    }
});