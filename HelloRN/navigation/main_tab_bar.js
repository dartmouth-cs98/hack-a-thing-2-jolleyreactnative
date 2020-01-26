import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import About from '../components/about';
import SearchTab from './search_tab'


const MainTabBar = createBottomTabNavigator(
  {
    SearchTab,
    AboutTab: {
      screen: About,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'About',
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="info-circle"
            size={26}
            color={focused ? '#58AADA' : 'grey'}
          />
        ),
      }),
    },
  },
  {
    initialRouteName: 'SearchTab',
  },
);


export default createAppContainer(MainTabBar);