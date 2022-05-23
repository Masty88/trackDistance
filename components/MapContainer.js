import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {setLatitude, setLongitude} from '../store/app/appSlice';
import {useDispatch, useSelector} from 'react-redux';
import MapboxGL from '@rnmapbox/maps';

MapboxGL.setAccessToken("pk.eyJ1IjoibWFzdHk4OCIsImEiOiJjbDNlZ3JjOTgwaTN1M2NwOHEya2xrNDJ3In0.FQBd7tdpJgZ_YO3r05_CmQ");

const MapContainer = () => {
  const dispatch = useDispatch();
  // const [latitude1, setLatitude1] = useState('');
  const {latitude, longitude} = useSelector(state => state.app);
  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        console.log(position);
        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        const currentLongitude = JSON.stringify(position.coords.longitude);
        dispatch(setLatitude(currentLatitude));
        dispatch(setLongitude(currentLongitude));
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
  //
  useEffect(() => {
    getOneTimeLocation();
  });

  return (
    <View style={styles.container}>
      <Text
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 16,
        }}>
        Latitude: {latitude}
      </Text>
      <Text
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 16,
        }}>
        Longitude: {longitude}
      </Text>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera
            zoomLevel={9}
            centerCoordinate={[46.953745, 6.84875]}
        />
        </MapboxGL.MapView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
    height: 400,
  },
  map: {
    flex: 1,
  },
});

export default MapContainer;
