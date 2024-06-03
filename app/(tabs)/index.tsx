import { Image, StyleSheet, Platform, View, FlatList } from "react-native";

import FeedPost from "@/components/Post/Post";
import { StatusBar } from "expo-status-bar";

import posts from "../../assets/data/posts.json";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={posts}
        renderItem={({ item }) => <FeedPost post={item} />}
      />
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
