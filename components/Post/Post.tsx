import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useState } from "react";
import Endtypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const post = {
  id: "p1",
  createdAt: "4 m",
  User: {
    id: "u1",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
    name: "Vadim Savin",
  },
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
  numberOfLikes: 11,
  numberOfShares: 2,
};

interface Post {
  id: string;
  User: {
    id: string;
    image?: string;
    name: string;
  };
  image?: string;
  createdAt: string;
  description: string;
  numberOfLikes: number;
  numberOfShares: number;
}

interface PostProps {
  post: Post;
}

const Post = ({ post }: PostProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.post}>
      {/* Post component */}
      {/* Post Header with details about the author */}
      <View style={styles.header}>
        <Image source={{ uri: post.User.image }} style={styles.profileImage} />
        <View>
          <Text style={styles.name}>{post.User.name}</Text>
          <Text style={styles.subtitle}>{post.createdAt}</Text>
        </View>
        <Endtypo
          name="dots-three-horizontal"
          size={16}
          color="black"
          style={styles.icon}
        />
      </View>

      {/* Post body with description and image */}
      <Text style={styles.description}>{post.description}</Text>
      {post.image && (
        <Image source={{ uri: post.image }} style={styles.image}></Image>
      )}

      {/* Post footer with likes and button */}
      <View style={styles.footer}>
        {/* Stats row */}
        <View style={styles.statsRow}>
          <Image
            source={require("@/assets/images/like.png")}
            // style={{ alignSelf: "center" }}
            style={styles.likeIcon}
          />
          <Text style={styles.likedBy}>Elon Musk and 11 others</Text>
          <Text style={styles.shares}>2 shares</Text>
        </View>
        {/* Buttons */}
        <View style={styles.buttonsRow}>
          <View style={styles.iconButton}>
            <Pressable style={styles.iconButton} onPress={handleLike}>
              <AntDesign
                name="like2"
                size={18}
                color={isLiked ? "royalblue" : "gray"}
              />
              <Text
                style={[
                  styles.iconButtonText,
                  { color: isLiked ? "royalblue" : "gray" },
                ]}
              >
                Like
              </Text>
            </Pressable>
          </View>
          <View style={styles.iconButton}>
            <FontAwesome5 name="comment-alt" size={18} color="gray" />
            <Text style={styles.iconButtonText}>Comment</Text>
          </View>
          <View style={styles.iconButton}>
            <MaterialCommunityIcons
              name="share-outline"
              size={18}
              color="gray"
            />
            <Text style={styles.iconButtonText}>Share</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  post: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
  subtitle: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },
  // Body
  description: {
    padding: 10,
    lineHeight: 20,
    letterSpacing: 0.3,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginTop: 10,
  },
  // footer
  footer: {
    paddingHorizontal: 10,
  },
  statsRow: {
    paddingVertical: 10,
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  likedBy: {
    color: "gray",
  },
  shares: {
    marginLeft: "auto",
    color: "gray",
  },
  // Buttons Row
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButtonText: {
    marginLeft: 5,
    color: "gray",
    fontWeight: "500",
  },
});

export default Post;
