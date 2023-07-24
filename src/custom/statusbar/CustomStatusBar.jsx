import React from "react";
import { StatusBar, View, StyleSheet } from "react-native";

const CustomStatusBar = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
        hidden={false}
        networkActivityIndicatorVisible={true}
        showHideTransition="fade"
        animated={true}
        style="auto"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
  },
  statusbarWrapper: {
    height: 40,
  },
});

export default CustomStatusBar;
