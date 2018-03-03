import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, Platform } from 'react-native';
import {  Icon } from 'react-native-elements';
import  { LinearGradient }  from 'expo';
import { Ionicons } from '@expo/vector-icons';

//mport { SOCIAL_FEED_MOCK_DATA } from '../constants/SOCIAL_FEED_MOCK_DATA';

export default class Profile extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {profile} = this.props
        return(
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})