import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Hello from Home Screen!</Text>
      <View>
        <Button
          title="Go to Counter Screen"
          onPress={() => navigation.navigate('Counter')}
        />
        <Button
          title="Go to Color Screen"
          onPress={() => navigation.navigate('Color')}
        />
      </View>
    </View>
  );
};

export default Home;
