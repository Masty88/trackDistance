import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Geolocation from 'react-native-geolocation-service';



const MapContainer = () => {
  const [latitude, setLatitude] = useState("");
  // const getOneTimeLocation = () => {
  //   Geolocation.getCurrentPosition(
  //     //Will give you the current location
  //     (position) => {
  //        console.log(position)
  //       //getting the Latitude from the location json
  //       const currentLatitude =
  //         JSON.stringify(position.coords.latitude);
  //       //Setting Longitude state
  //       setLatitude(currentLatitude);
  // },error => {
  //             // See error code charts below.
  //             console.log(error.code, error.message);
  //     },
  //     {
  //       enableHighAccuracy: false,
  //       timeout: 30000,
  //       maximumAge: 1000
  //     },
  //   );
  // };
  //
  // useEffect(()=>{
  //   getOneTimeLocation();
  // })


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
