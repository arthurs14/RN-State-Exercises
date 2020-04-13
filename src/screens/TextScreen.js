import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <Text style={styles.header}>Enter Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newText => setName(newText)}
      />
      {name.length < 5 ? (
        <Text>Text must be longer than 5 characters</Text>
      ) : null}
      <Text style={styles.header}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
  header: {
    margin: 15,
  },
});

export default TextScreen;
