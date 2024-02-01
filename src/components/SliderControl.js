import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

export const SliderControl = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const onSliderValueChange = (value) => {
    setSliderValue(value);
    console.log(value)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}> {sliderValue}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        value={sliderValue}
        onValueChange={onSliderValueChange}
        step={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color:'#000'
  },
  slider: {
    width: 300,
    color:'#000'
  },
});


