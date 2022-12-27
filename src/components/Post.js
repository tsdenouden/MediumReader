import { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";

const Post = ({ title, content }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { width } = useWindowDimensions();
  const source = {
    html: content,
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ScrollView>
          <View style={styles.content}>
            <Pressable
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.backButton}>Back</Text>
            </Pressable>
            <Text style={styles.title}>{title}</Text>
            <RenderHtml
              contentWidth={width}
              source={source}
              ignoredDomTags={["iframe"]}
            />
            <Pressable
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.backButton}>Back</Text>
            </Pressable>
          </View>
        </ScrollView>
      </Modal>

      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.link}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke",
    paddingHorizontal: 20,
  },
  link: {
    color: "rgb(103, 124, 158)",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  backButton: {
    color: "rgb(73, 74, 74)",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
  content: {
    backgroundColor: "whitesmoke",
    padding: 20,
  },
});

export default Post;
