import React from 'react';
import { TabNavigator } from 'react-navigation';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';

import { Platform } from 'react-native';
import { SimpleLineIcons, EvilIcons } from '@expo/vector-icons';


  const HomeTabs = TabNavigator({
    SocialTab: {
      screen: Feed,
      navigationOptions: {
        tabBarLabel: 'Feed',
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons
            name='grid'
            color={tintColor}
            size={Platform.OS === 'ios' ? 22 : 25}
          />
        )
      }
    },
    ProfileTab: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons
            name='check'
            color={tintColor}
            size={Platform.OS === 'ios' ? 22 : 25}
          />
        )
      }
    }
  }, {
    initialRouteName: 'SocialTab',
    tabBarPosition: 'bottom',
    animationEnabled: Platform.OS === 'ios' ? false : true,
    swipeEnabled: Platform.OS === 'ios' ? false : true,
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: 'blue',
      inactiveTintColor: '#999999',
      style: {
        backgroundColor: '#ffffff',
        padding: Platform.OS === 'ios' ? 5 : 0,
      },
      indicatorStyle: {
        backgroundColor: 'white'
      },
      labelStyle: {
        fontSize: 12
      }
    }
  });
  
  export default HomeTabs;