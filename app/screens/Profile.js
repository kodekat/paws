import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, Platform, TouchableOpacity } from 'react-native';
import {  Icon } from 'react-native-elements';
import  { LinearGradient }  from 'expo';
import { Ionicons } from '@expo/vector-icons';

//import { SOCIAL_FEED_MOCK_DATA } from '../constants/SOCIAL_FEED_MOCK_DATA';

export default class Profile extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {profile} = this.props
        return(
            <View style={styles.container}>
            <TouchableOpacity 
                style={styles.buttonLogin}
                //onPress={this.handleLogInSubmit}
                 onPress= {()=> this.props.navigation.navigate('Intro')}
            >
            <Text style={{color: 'white'}}> {"log out"} </Text>
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
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
})