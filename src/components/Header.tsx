import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.lightHeader}>Greab your</Text>
      <Text style={styles.boldHeader}>delicious meal!</Text>
    </View>
  );
};

export default React.memo(Header);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
  },
  lightHeader: {
    fontSize: 35,
    marginTop: 60,
  },
  boldHeader: {
    fontSize: 45,
    fontWeight: "bold",
  },
});
