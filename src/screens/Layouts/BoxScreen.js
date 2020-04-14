import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    width: 100,
    height: 50,
    backgroundColor: 'lightcoral',
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'green',
    backgroundColor: 'darkseagreen',
    width: 100,
    height: 50,
    top: 50,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'purple',
    backgroundColor: 'plum',
    width: 100,
    height: 50,
  },
});

export default BoxScreen;
