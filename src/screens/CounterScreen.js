import React, { useState, useReducer } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const initialState = 0;
const INCREMENT = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case 'Increase':
      return state + action.payload;
    case 'Decrease':
      return state + action.payload;
    default:
      return state;
  }
};

const CounterScreen = () => {
  let [state, dispatch] = useReducer(reducer, initialState);
  // let [counter, setCounter] = useState(0); // set initial state

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: 'Increase', payload: INCREMENT })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: 'Decrease', payload: -1 * INCREMENT })}
      />
      <Text>Current Count: {state}</Text>
      <Text>Simple use of state using React Hooks at its basic form!</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
