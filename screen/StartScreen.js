import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';
import MapContainer from '../components/MapContainer';

const StartScreen = ({onPress}) => {
  return (
    <SafeAreaView>
      <MapContainer />
      <Button onPress={onPress}>START</Button>
    </SafeAreaView>
  );
};

export default StartScreen;
