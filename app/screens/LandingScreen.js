import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { LinearGradient } from 'expo';
//screens
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Feed from './Feed';

import Logo from '../../assets/pawsLogo.png'

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentScreen: null,
        }
    }
    
    renderContent(){
        const {currentScreen} = this.state

        //check current screen
        if(currentScreen === 'login'){
            return <Login/>
        } else if (currentScreen === "profile"){
            return <Profile/>
        } else if (currentScreen === 'register'){
            return <Register/>
        }else if (currentScreen === 'feed'){
            return <Feed/>
        } else{
            //landing screen code
            return(
                
                <View style={{flex:1}}>
                   
                    <LinearGradient 
                    style={styles.mainContainer}
                    colors={['#1D2786','#6A65D8']}
                    start={{x: 0.0, y:0.0}}
                    end={{x:1.0, y:1.0}}
                    >
                    <Image
                    source={Logo}
                    width={100}
                    height={200}/>
                    <Text style={styles.textDisplay}> PAWS  </Text>
                        
                     </LinearGradient>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity 
                        style= {styles.buttonStyle}
                        onPress= {()=> this.setState({currentScreen: 'login'})}>
                        <Text style={styles.textDisplay}> Login </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style= {styles.buttonStyle}
                        onPress= {()=> this.setState({currentScreen: 'register'})}>
                        <Text style={styles.textDisplay}> Sign Up </Text>
                        </TouchableOpacity>
                    </View>    
            </View>
             
            );
        }  

    }
    render() {
      return (
        this.renderContent()
      );
    }
  }
  
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center'
      
    },
    buttonContainer:{
        height:80,
        backgroundColor:'rgba(255, 205, 205, 0.88)',
        flexDirection: 'row'
    },
    buttonStyle:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textDisplay:{
        color: 'white'

    }

  });
