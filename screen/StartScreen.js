import React, {useEffect, useState} from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import MapContainer from '../components/MapContainer';
import Loader from '../components/Loader';
import {useDispatch, useSelector} from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import {
  addPoint,
  setLatitude,
  setLongitude,
  toggleLoading,
  getMatrix, getDirection,
} from "../store/app/appSlice";

// eslint-disable-next-line react-hooks/rules-of-hooks

const StartScreen = () => {
  const {latitude, longitude, loading, startPoint, endPoint, points} =
    useSelector(state => state.app);
  const dispatch = useDispatch();
  const [locating, setLocating] = useState(false);
  const [button, setButton] = useState('START');
  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        //getting the Latitude from the location json
        const currentLatitude = position.coords.latitude;
        const currentLongitude = position.coords.longitude;
        dispatch(setLatitude(currentLatitude));
        dispatch(setLongitude(currentLongitude));
        dispatch(addPoint());
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };
  const onPress = () => {
    getOneTimeLocation();
    dispatch(toggleLoading());
    if (button === 'STOP') {
      setButton('START');
    } else {
      setButton('STOP');
    }
    //

  };

  const getDistance = () => {
    dispatch(getDirection(points));
  };

  useEffect(() => {
    getOneTimeLocation();
    console.log("here")
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      dispatch(toggleLoading());
    }
  }, [latitude, longitude, button]);
  return (
    <SafeAreaView>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <View>
          <MapContainer latitude={latitude} longitude={longitude} />
          <Button onPress={onPress}>{button}</Button>
          <Button onPress={() => console.log('points:', points)}>points</Button>
          <Button onPress={getDistance}>distances</Button>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StartScreen;
