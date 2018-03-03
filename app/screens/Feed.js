import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, Platform, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import {  Icon } from 'react-native-elements';
import  { LinearGradient }  from 'expo';
import { Ionicons } from '@expo/vector-icons';

import { SOCIAL_FEED_MOCK_DATA } from '../constants/SOCIAL_FEED_MOCK_DATA';

export default class Feed extends Component {

  //This will render one post
  _renderItem = ({item}) => {
    return(
    <View style={styles.itemContainer}>

    <TouchableOpacity>
      <View style={styles.headerContainer}>
        
        <Image
          source={{uri: item.image}}
          style={{
            //set width and hieght for picture from online 
            width: 50,
            height: 50, 
          }}
        />
        <View style={styles.nameLocation}>
          <Text> {item.name} </Text> 
          <Text> {item.location} </Text> 
        </View>
        </View>
        </TouchableOpacity>

          <View style={styles.imageContainer}>
          <Image
            source={{uri: item.post["image"]}}
            style={{width:400, height:400}}
          />
          

          <View style={styles.captionContainer}>
            <View style={styles.buttonContainer}>
            <Ionicons
                name="ios-heart-outline"
                size={30}
                color='#085947'
                style={{paddingRight: 8}}
                />

            <Ionicons
            name="ios-chatbubbles-outline"
            size={30}
            color='#085947'
            style={{paddingRight: 8}}
            />

            <Ionicons
            name="ios-paper-plane-outline"
            size={30}
            color='#085947'
            />
            </View>
            <Text> {item.post["caption"]}</Text>
            <Text> {item.post["date"]} </Text>
            </View>

       </View>
    </View> 
    );
  }

  render(){
    return(
      <ScrollView style={styles.container}>
        <FlatList 
          data={SOCIAL_FEED_MOCK_DATA}
          style={styles.item}
          renderItem={({item, seperator}) => this._renderItem({item, seperator})}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
   //scrollview 
  container: {
    flexGrow: 1,
    marginTop: 20
  },
  //flatlist
  item: {
    flexGrow: 1,
    flexDirection:'row',
  },
  itemContainer:{
    //alignItems: 'center',
  },
  // name + location container
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  // line up text as column
  nameLocation: {
    flexDirection:'column',
  },

  imageContainer:{
    flex:1,
    flexDirection: 'column',
  },
  captionContainer:{
    
  },
  buttonContainer:{
    flexDirection: 'row',
    marginLeft: 10,
  }

});