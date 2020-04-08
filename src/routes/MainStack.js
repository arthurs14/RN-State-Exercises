import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import CounterScreen from '../screens/CounterScreen';
import ColorScreen from '../screens/ColorScreen';
import SquareScreen from '../screens/SquareScreen';

const NavigationStack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationStack.Navigator>
      <NavigationStack.Screen name="Home" component={Home} />
      <NavigationStack.Screen name="Counter" component={CounterScreen} />
      <NavigationStack.Screen name="Color" component={ColorScreen} />
      <NavigationStack.Screen name="Square" component={SquareScreen} />
    </NavigationStack.Navigator>
  );
};

export default MainStack;
