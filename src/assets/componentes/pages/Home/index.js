import React from "react";
import { StyleSheet, View} from "react-native";

const Home = () => {
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={styles.redbox}> 
      </View> 
      <View style={styles.orangebox} />
      <View style={styles.bluebox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0037A8'

  },
  redbox: {
    flex: 1, 
    backgroundColor: "red",
    flex: 1, alignItems: "center", justifyContent: "center"
  },
  orangebox: {
    flex: 1, 
    backgroundColor: "darkorange",
    flex: 1, alignItems: "center", justifyContent: "center"
  },
  bluebox: {
    flex: 1, 
    backgroundColor: "blue",
    flex: 1, alignItems: "center", justifyContent: "center"
  }
});

export default Home;