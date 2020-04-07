import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './MainStack';

const MainStack = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default MainStack;
