import React from 'react';
import { Dimensions, StyleSheet, View } from "react-native";
import {ActivityIndicator, Colors} from 'react-native-paper';

const Loader = ({loading}) => {
  return (
    <>
      {loading?(
        <View style={styles.container}>
          <ActivityIndicator size={'large'} animating={true} color={Colors.red800} />
        </View>
      ): null}
    </>
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

export default Loader;
