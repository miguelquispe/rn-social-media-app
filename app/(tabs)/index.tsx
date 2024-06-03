import { StyleSheet, View } from "react-native";

import { StatusBar } from "expo-status-bar";

import FeedScreen from "./feedScreen";
import CreatePostScreen from "./createPost";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FeedScreen />
      {/* <CreatePostScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
