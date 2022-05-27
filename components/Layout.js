import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';

const Layout = ({children}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    backgroundColor: 'black',
  },
});

export default Layout;
