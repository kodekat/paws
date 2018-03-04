import { StackNavigator } from 'react-navigation';
import LandingScreen from '../screens/LandingScreen';
import Login from '../screens/Login';
import Register from '../screens/Register';

export default StackNavigator({
    Home: {
      screen: LandingScreen,
    },
    Login:{
        screen: Login,
    },
    Register:{
        screen: Register,
    },
  });