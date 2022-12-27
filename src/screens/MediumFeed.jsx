import { useEffect, useState } from "react";
import { StyleSheet, Text, ScrollView, TextInput } from "react-native";
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
  }, [author]);

  return (
    <ScrollView>
      <TextInput
        style={styles.header}
        placeholder="Enter Medium User:"
        onSubmitEditing={(e) => {
          setAuthor(e.nativeEvent.text);
        }}
      />
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
    paddingTop: 15,
    paddingLeft: 10,
  },
});

export default MediumFeed;
