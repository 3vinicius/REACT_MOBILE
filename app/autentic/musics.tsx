import React, {useState} from "react";
import {
    SafeAreaView,
    View,
    ScrollView,
    Image,
    TextInput,
    Text,
    StyleSheet,
    TouchableOpacity,
    Button,
} from "react-native";
import WebView from "react-native-webview";
export default (props) => {
    const [textInput1, onChangeTextInput1] = useState('');
    const [defaultImage, onChangeTextDefaultImage] = useState(0);


    const initialImages = Array(5).fill('https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac2ce476-71da-4eb8-badb-ca9a21cfac96'); // Imagens iniciais (todas com a mesma)
    const [imageSources, setImageSources] = useState(initialImages);


    const handleImageClick = (index) => {


        const newImageSources = [...imageSources];

        if (imageSources[index] == 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98acf552-1cfb-4736-809b-a8d2c5ae5a8d' ){
            newImageSources[index] = 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac2ce476-71da-4eb8-badb-ca9a21cfac96';
        } else {
            newImageSources[index] = 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98acf552-1cfb-4736-809b-a8d2c5ae5a8d';
        }
        setImageSources(newImageSources);
    };


    return (

        <SafeAreaView style={styles.container}>
            <ScrollView  style={styles.scrollView}>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Image
                            source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e03e495a-8596-4cab-a33a-703e023e41e5"}}
                            resizeMode = {"stretch"}
                            style={styles.image}
                        />
                        <Image
                            source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44d63046-edde-43d7-8305-81a4eff65b16"}}
                            resizeMode = {"stretch"}
                            style={styles.image}
                        />
                        <Image
                            source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d23a960c-d99d-4c3e-9a47-dfa30856b961"}}
                            resizeMode = {"stretch"}
                            style={styles.image}
                        />
                        <Image
                            source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/176f73e3-b62b-457b-bf71-ff04297babe8"}}
                            resizeMode = {"stretch"}
                            style={styles.image}
                        />
                        <Image
                            source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23590a94-2b18-4d87-b753-72e472e6c7de"}}
                            resizeMode = {"stretch"}
                            style={styles.image2}
                        />
                    </View>
                    <View style={styles.column2}>

                        {imageSources.map((source ,index) => {
                            return <TouchableOpacity key={index} onPress={() => handleImageClick(index)}>
                                <Image  source = {{uri: source}}
                                        resizeMode = {"stretch"}
                                        style={styles.image3} />
                            </TouchableOpacity>
                        } )}
                    </View>
                </View>
                <View style={styles.viewStyle}>
                    <TextInput
                        placeholder={"Buscar"}
                        value={textInput1}
                        onChangeText={onChangeTextInput1}
                        style={styles.input}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    viewStyle : {
        marginBottom: 50
    },
    absoluteImage: {
        position: "absolute",
        top: 23,
        left: -3,
        width: 15,
        height: 17,
    },
    column: {
        width: 150,
        marginRight: 53,
    },
    column2: {
        flex: 1,
        marginTop: 32,
        marginRight: 4,
    },
    image: {
        borderRadius: 10,
        height: 90,
        marginBottom: 50,
    },
    image2: {
        borderRadius: 10,
        height: 90,
    },
    image3: {
        width: 50,
        height: 25,
        marginBottom: 115,
    },
    image4: {
        width: 50,
        height: 26,
        marginBottom: 114,
    },
    image5: {
        width: 50,
        height: 25,
    },
    input: {
        color: "#000000",
        fontSize: 16,
        marginBottom: 22,
        marginHorizontal: 64,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 19,
        shadowColor: "#00000040",
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 10,
        elevation: 10,
    },
    row: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 13,
        marginHorizontal: 6,
    },
    row2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    scrollView: {
        flex: 1,
        backgroundColor: "#F2F2F2",
        borderRadius: 20,
        paddingTop: 40,
        shadowColor: "#00000040",
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 4,
        elevation: 4,
    },
    text: {
        color: "#F5F5F5",
        fontSize: 16,
    },
    view: {
        width: 9,
        marginTop: 25,
    },
    view2: {
        height: 633,
        backgroundColor: "#D9D9D9",
    },
    view3: {
        width: 201,
        alignItems: "center",
        backgroundColor: "#2C2C2C",
        borderColor: "#2C2C2C",
        borderWidth: 1,
        paddingVertical: 28,
    },
    view4: {
        width: 201,
        alignItems: "center",
        backgroundColor: "#1E1E1E",
        borderColor: "#2C2C2C",
        borderWidth: 1,
        paddingVertical: 28,
    },
});