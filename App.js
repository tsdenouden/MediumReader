import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://medium.com/feed/@thespacesmag')
    .then(response => response.text())
    .then(feed => {
      // xml feed to json
      let xmlFeed = new XMLParser().parseFromString(feed);
      xmlFeed = xmlFeed.children[0].children;

      // get posts from feed
      let newPosts = [];
      xmlFeed
        .filter(element => element.name === 'item')
        .forEach(post => {
          let attributes = post.children;
          let newPost = {
            title: attributes[0]?.value,
            content: attributes[attributes.length-1]?.value
          };
          newPosts.push(newPost);
        })
      setPosts(newPosts);
    })
    .catch(err => {
      console.error(err);
    })
  }, []);

  return (
    <ScrollView>
      <Text>React Native App!</Text>
      {posts.map((post, index) => 
        <View key={index}>
          <Text>{post.title}</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

export default App;