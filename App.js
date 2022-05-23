import React, {useEffect} from 'react';
import {Text, View, PermissionsAndroid} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import StartScreen from './screen/StartScreen';
import { getPosition, position } from "./store/app/appSlice";


const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'track distance' +
          ' App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'track di2ce' +
          ' App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the app');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const requestLocationCoarsePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'track di2ce' +
          ' App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
  } catch (err) {
    console.warn(err);
  }
};

const App = () => {
  const dispatch= useDispatch()
  const {loading} = useSelector(state => state.app);
  useEffect(() => {
    requestLocationPermission().then(r => requestLocationCoarsePermission());
    dispatch(getPosition())
  }, []);
  return (
    <>
      <StartScreen />
    </>
  );
};

export default App;
