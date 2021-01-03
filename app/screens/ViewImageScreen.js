import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" color={colors.white} size={35} />
        </View>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            color={colors.white}
            size={35}
          />
        </View>
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.black,
  },
  closeIcon: {
    top: 50,
    left: 20,
    position: "absolute",
  },
  deleteIcon: {
    top: 50,
    right: 20,
    position: "absolute",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
