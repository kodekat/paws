import { StackNavigator } from 'react-navigation';

import IntroStack from './IntroStack';
import HomeTabs from './HomeTabs';

export default StackNavigator({
    Intro:{
        screen: IntroStack
    },
    FeedTab:{
        screen: HomeTabs,
    },
    
  },{
    
        initialRouteName: 'Intro',
        mode: 'modal',
        headerMode: 'none'
      
  });