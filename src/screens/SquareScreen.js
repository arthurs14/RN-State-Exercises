import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, increment) => {
    switch (color) {
      case 'red':
        red < 0 || red > 255 ? null : setRed(curRed => curRed + increment);
        return;
      case 'green':
        green < 0 || green > 255
          ? null
          : setGreen(curGreen => curGreen + increment);
        return;
      case 'blue':
        blue < 0 || blue > 255 ? null : setBlue(curBlue => curBlue + increment);
        return;
      default:
        return;
    }
  };

  //console.log('red:', red);

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setGreen('green', COLOR_INCREMENT)}
        onDecrease={() => setGreen('green', -1 * COLOR_INCREMENT)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setBlue('blue', COLOR_INCREMENT)}
        onDecrease={() => setBlue('blue', -1 * COLOR_INCREMENT)}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
