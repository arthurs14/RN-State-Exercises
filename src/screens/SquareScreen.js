import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log('red:', red);

  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(curRed => curRed + 1)}
        onDecrease={() => setRed(curRed => curRed - 1)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setGreen(curGreen => curGreen + 1)}
        onDecrease={() => setGreen(curGreen => curGreen - 1)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setBlue(curBlue => curBlue + 1)}
        onDecrease={() => setBlue(curBlue => curBlue - 1)}
        color="Blue"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
