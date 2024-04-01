import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.Tela}>
    </View>,

    <View style={styles.Tela}>
      <View style={styles.boxLogo}>
        <Image style={styles.logo} 
          source={require('./src/assets/nubank-logo-branco.png')}>
        </Image>
      </View>

      <Text style = {styles.User}>Olá, Felipe Melo</Text>
      <TextInput style = {styles.Procurar} placeholderTextColor={'#FFF'} placeholder ='Procurar...'></TextInput>

      <View style={styles.CarCred}>
        <Text style = {styles.Cartao}>Cartão de crédito</Text>
        <Text style = {styles.Fatura}>Fatura</Text>
        <Text style = {styles.Valor}>R$ 1.500,00</Text>
        <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Pagar fatura</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Conta}>
        <Text style = {styles.Cartao}>Conta</Text>
        <Text style = {styles.Fatura}>Saldo Disponível</Text>
        <Text style = {styles.Valor1}>R$ 300,00</Text>
        <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText1}>Transferir</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnCart}>
        <Text style={styles.btnTextCart}>Meus cartões</Text>
        </TouchableOpacity>
    </View>
 );
}

const styles = StyleSheet.create({
  Tela: {
    flex: 1,
    backgroundColor: '#8B03BB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxLogo: {
    marginBottom: 40,
    alignItems: 'center',
  },

  logo: {
    width: 120,
    height: 50,
  } ,

  User: {
    marginRight: 330,
    marginBottom: 30,
    color: '#FFF',
  },

  Procurar: {
    padding: 10,
    borderRadius: 10,
    borderColor: '#FFF',
    borderWidth: 1,
    marginBottom: 20,
    width: '90%',
  },

  CarCred: {
    backgroundColor: '#FFF',
    padding: 30,
    borderRadius: 10,
    margin: 15,
    width: '90%',
  },

  Cartao: {
    fontSize: 18,
  },

  Valor: {
    fontSize: 30,
    marginTop: 5,
    marginBottom: 5,
    color: '#0099CC'
  },

  Valor1: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 30,
  },

  btn: {
    marginTop: 20,
    padding: 10,
    borderRadius: 50,
    borderColor: '#8B03BB',
    borderWidth: 2,
    width: '40%',
  },

  btnText: {
    marginLeft: 20,
    color: '#8B03BB',
  },

  btnText1: {
    marginLeft: 30,
    color: '#8B03BB',
  },

  Conta: {
    backgroundColor: '#FFF',
    padding: 30,
    borderRadius: 10,
    margin: 15,
    width: '90%',
  },

  btnCart: {
    backgroundColor: '#0099CC',
    padding: 10,
    borderRadius: 50,
    marginTop: 15,
    marginBottom: 20,
    width: '90%',
},

btnTextCart: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
},
});
