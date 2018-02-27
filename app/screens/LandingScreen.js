import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
//screens
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Feed from './Feed';

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
                    < LinearGradient 
                    style={styles.mainContainer}
                    colors={['#1D2786','#6A65D8']}
                    start={{x: 0.0, y:0.0}}
                    end={{x:1.0, y:1.0}}
                    />
                    < View style={styles.buttonContainer}>
                        <TouchableOpacity 
                        style= {styles.button}
                        onPress= {()=> this.setState({currentScreen: 'login'})}>
                        <Text > Login </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style= {styles.button}
                        onPress= {()=> this.setState({currentScreen: 'register'})}>
                        <Text > Register </Text>
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
      backgroundColor: 'blue',
      
    },
    buttonContainer:{
        height:80,
        backgroundColor:'#FFCDCD',
        flexDirection: 'row'
    },
    button:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }

  });
