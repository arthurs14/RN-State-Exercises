import React, { useState, useReducer } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const initialState = { count: 0 };
const INCREMENT = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case 'Increase':
      return { ...state, count: state.count + action.payload };
    case 'Decrease':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  let [state, dispatch] = useReducer(reducer, initialState);
  const { count } = state;
  // let [counter, setCounter] = useState(0); // set initial state

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: 'Increase', payload: INCREMENT })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: 'Decrease', payload: INCREMENT })}
      />
      <Text>Current Count: {count}</Text>
      <Text>Simple use of state using React Hooks at its basic form!</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
