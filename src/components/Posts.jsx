import { Image, Text, View, StyleSheet } from "react-native"

export default function Posts ({post}) {
    return(
        <>
        <View style={styles.post}> 
        <Image  style={styles.photo} source={{uri: post.photo}} />  
        <Text style={styles.post}> {post.description} </Text> 
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    post: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: {width:1, height:2}
    },
    image: {
        width: 300,
        height: 300
    },
    title: {
        fontSize: 20
    }
})