import { FlatList } from "react-native";
import FeedPost from "@/components/Post/Post";
import posts from "../../assets/data/posts.json";

export default function FeedScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <FeedPost post={item} />}
    />
  );
}
