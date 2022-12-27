import { useState } from "react";
import { Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

const Post = ({title, content}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const { width } = useWindowDimensions();
    const source = { 
        html: content.replace('iframe', 'p') 
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
                    <Pressable
                        onPress={() => {
                            setModalVisible(false);
                        }}
                    >
                        <Text>Back</Text>
                    </Pressable>
                    <RenderHtml 
                        contentWidth={width}
                        source={source}
                    />
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
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "whitesmoke",
        paddingHorizontal: 20
    },
    link: {
        color: 'rgb(103, 124, 158)',
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
})

export default Post;