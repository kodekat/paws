import React from 'react';
import { StyleSheet, Text, View, TextInput,
    ScrollView, Input,
    TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo';
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import Feed from './Feed';

export default class Login extends React.Component {
    static navigationOptions = {
        title: 'Login',
        headerStyle: {backgroundColor: '#1D2786', borderBottomWidth: 0},
        headerTintColor: 'white',
        headerTitleStyle: { color: 'white', fontSize: 15 },
        borderColor: '#1D2786', 
      };

    constructor(props) {
        super(props);
    
        this.state = {
          screen: null,  
          email: '',
          password: '',
          isValidLogin: false
        };
      }
      handleSubmit = () => {
        const {email, password}  = this.state
        if (email !== '' && password !== '') {
            //Keyboard.dismiss();
            //console.log("LogIn credentials ok")
            //return this.setState({isValidLogin: true})
        }
        
        // handleLogInSubmit= () => {
            
        //         return <Feed/>
        
        // }
        
    }
    render() {
    const { screen } = this.state;
    isValidLogin = this.state;

    if(screen === 'feed' && isValidLogin){
          return <Feed/> 
        } else {
    return ( 
        <LinearGradient 
        style={styles.mainContainer}
        colors={['#1D2786','#6A65D8']}
        start={{x: 0.5, y:0.0}}
        end={{x:0.5, y:1.0}} >
            <View style={styles.mainContainer}>
            <Text style={styles.textDisplay}> Welcome back! </Text>
            <Text> </Text>
            <TextInput
            style={styles.phraseInput}
            value={this.state.email}
            placeholder="email"
            placeholderTextColor="white"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            //selectionColor="white"
            onChangeText={(text) => this.setState({email: text})}
            onSubmitEditing={this.handleSubmit}
            />
            <TextInput
            style={styles.phraseInput}
            value={this.state.password}
            placeholder="password"
            placeholderTextColor="white"
            keyboardType="email-address"
            autoCapitalize="none"
            secureTextEntry={true}// hidden pass
            onChangeText={(text) => this.setState({password: text})}
            onSubmitEditing={this.handleSubmit}
            />
            <TouchableOpacity 
                style={styles.buttonLogin}
                //onPress={this.handleLogInSubmit}
                 onPress= {()=> this.props.navigation.navigate('FeedTab')}
            >
            <Text style={{color: 'white'}}> {"log in"} </Text>
            </TouchableOpacity>
            </View>
        </LinearGradient>
   
    );
  }
 }
}
const styles = StyleSheet.create({
   
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
   mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
        
      },
  phraseInput: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    //fontSize: 20,
    textAlign: 'center',
    borderRadius: 50,
    padding: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    //backgroundColor: '#00B7C2',
    backgroundColor: 'rgba(111, 231, 221,0.6)',
    height: 50,
    //borderColor: 'white',
    //borderWidth: 1,
    //borderRadius: 30,
  },
  buttonLogin:{
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 50,
    padding: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    alignItems: 'center',
    //backgroundColor: '#00B7C2',
    backgroundColor: 'rgba(82, 18, 98,0.4)',
   
  },
  textDisplay:{
    color: 'white',
    textAlign: 'center'

}
});