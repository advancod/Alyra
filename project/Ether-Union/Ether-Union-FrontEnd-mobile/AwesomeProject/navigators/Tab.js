import { createBottomTabNavigator } from 'react-navigation';
import AdminScreen from '../screens/tab/AdminScreen';
import DemandScreen from '../screens/tab/DemandScreen';
import GameScreen from '../screens/tab/GameScreen';

const Tab = createBottomTabNavigator(
  {
    demand: {
      screen: DemandScreen,
    },
    admin: {
      screen: AdminScreen,
    },
    game: {
      screen: GameScreen,
    },
  },
  {
    initialRouteName: 'demand',
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
