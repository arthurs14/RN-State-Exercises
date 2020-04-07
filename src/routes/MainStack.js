import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import CounterScreen from '../screens/CounterScreen';

const NavigationStack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationStack.Navigator>
      <NavigationStack.Screen name="Home" component={Home} />
      <NavigationStack.Screen name="Counter" component={CounterScreen} />
    </NavigationStack.Navigator>
  );
};

export default MainStack;
