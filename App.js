import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './src/routes/MainNavigation';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return <Navigator />;
};

const styles = StyleSheet.create({});

export default App;
