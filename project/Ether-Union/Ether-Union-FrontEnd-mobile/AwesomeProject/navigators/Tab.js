import { createBottomTabNavigator } from 'react-navigation';
import AdminScreen from '../screens/tab/AdminScreen';
import DemandScreen from '../screens/tab/DemandScreen';
import GameScreen from '../screens/tab/GameScreen';

const Tab = createBottomTabNavigator(
  {
    Tab1: {
      screen: DemandScreen,
    },
    Tab2: {
      screen: AdminScreen,
    },
    Tab3: {
      screen: GameScreen,
    },
  },
  {
    initialRouteName: 'Tab1',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
      inactiveTintColor: '#888',
      activeBackgroundColor: '#FFF', // iOS
      inactiveBackgroundColor: '#DDD', // iOS
      pressColor: '#e91e63', // Android
      indicatorStyle: { // Android
        backgroundColor: '#242134',
      },
      style: {
        backgroundColor: '#EEE', // Android
      },
    },
  },
);

export default Tab;
