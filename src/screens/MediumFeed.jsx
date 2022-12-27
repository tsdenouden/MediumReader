import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import FetchPosts from "../services/FetchPosts";
import Post from "../components/Post";

const MediumFeed = () => {
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState("thespacesmag");

  useEffect(() => {
    // fetch posts from author
    FetchPosts(author)
      .then((posts) => setPosts(posts))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ScrollView>
      <Text style={styles.header}>@{author}</Text>
      {posts.map((post, index) => (
        <Post title={post.title} content={post.content} key={index} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontFamily: "monospace",
  },
});

export default MediumFeed;
