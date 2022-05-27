import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {setLatitude, setLongitude} from '../store/app/appSlice';
import {useDispatch, useSelector} from 'react-redux';
import MapboxGL from '@rnmapbox/maps';
import {isNumber} from '@rnmapbox/maps/javascript/utils';

MapboxGL.setAccessToken(

);
MapboxGL.setConnected(true);

const MapContainer = ({latitude, longitude}) => {
  const {points} = useSelector(state => state.app);
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.PointAnnotation
            id={'point1'}
            coordinate={[longitude, latitude]}
          />
          <MapboxGL.Camera
            zoomLevel={15}
            centerCoordinate={[longitude, latitude]}
          />
          {/*<View>{renderAnnotations()}</View>*/}
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
