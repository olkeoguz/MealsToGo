import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { SafeArea } from './src/components/utility/safe-area';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return <AppLoading />;
  }

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

  const Tab = createBottomTabNavigator();

  const TAB_ICON = {
    Restaurants: 'md-restaurant',
    Map: 'md-map',
    Settings: 'md-settings',
  };

  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
    };
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
              //style
            }}
          >
            <Tab.Screen name='Restaurants' component={RestaurantsScreen} />
            <Tab.Screen name='Map' component={MapScreen} />
            <Tab.Screen name='Settings' component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
        <ExpoStatusBar style='auto' />
      </ThemeProvider>
    </>
  );
}


