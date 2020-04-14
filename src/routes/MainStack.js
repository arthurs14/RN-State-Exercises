import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import CounterScreen from '../screens/CounterScreen';
import ColorScreen from '../screens/ColorScreen';
import SquareScreen from '../screens/SquareScreen';
import TextScreen from '../screens/TextScreen';
import BoxScreen from '../screens/Layouts/BoxScreen';

const NavigationStack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationStack.Navigator>
      <NavigationStack.Screen name="Home" component={Home} />
      <NavigationStack.Screen name="Counter" component={CounterScreen} />
      <NavigationStack.Screen name="Color" component={ColorScreen} />
      <NavigationStack.Screen name="Square" component={SquareScreen} />
      <NavigationStack.Screen name="Text" component={TextScreen} />
      <NavigationStack.Screen name="Box" component={BoxScreen} />
    </NavigationStack.Navigator>
  );
};

export default MainStack;
