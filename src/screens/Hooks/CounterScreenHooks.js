import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const CounterScreen = () => {
  let [counter, setCounter] = useState(0); // set initial state

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
      <Text>Simple use of state using React Hooks at its basic form!</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
