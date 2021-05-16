import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from '../../components/utility/safe-area';
import {RestaurantsNavigator} from './RestaurantsNavigator';
import { Ionicons } from '@expo/vector-icons';

const AppNavigator = () => {
  function SettingsScreen() {
    return (
      <SafeArea>
        <Text>Settings!</Text>
      </SafeArea>
    );
  }

  function MapScreen() {
    return (
      <SafeArea>
        <Text>Map!</Text>
      </SafeArea>
    );
  }

  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
    };
  };

  const Tab = createBottomTabNavigator();

  const TAB_ICON = {
    Restaurants: 'md-restaurant',
    Map: 'md-map',
    Settings: 'md-settings',
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          //style
        }}
      >
        <Tab.Screen name='Restaurants' component={RestaurantsNavigator} />
        <Tab.Screen name='Map' component={MapScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
