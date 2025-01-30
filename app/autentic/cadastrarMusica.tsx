import React, {useCallback, useState} from "react";
import {
    SafeAreaView,
    View,
    ScrollView,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Button, Alert
} from "react-native";

import {Service} from "@/scripts/service"

//import YoutubePlayer, {getYoutubeMeta} from "react-native-youtube-iframe";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default (props) => {


    const [textInput1, onChangeTextInput1] = useState('');
    const [videoId, onChangeVideoId] = useState('');
    const [display, onChangeDisplay] = useState('none')


    const service = new Service();


    const [playing, setPlaying] = useState(false);

    function carrgarInput(text: string){
        onChangeVideoId(textInput1)
    }


    async function registrarMusica(){


        const meta  =  await getYoutubeMeta(videoId).then(meta => {
            console.log('title of the video : ' + meta.title);
            console.log('title of the video : ' + meta.thumbnail_url);
            return meta
        });

        let email = await AsyncStorage.getItem("EMAIL")

        const result = await service.registrarMusica(meta.title,textInput1,email,meta.thumbnail_url)
        console.log(result)
        console.log("hi")
        if (result === "REGISTREFULL") {
            Alert.alert("Video registrado")
        }
    }

    const onStateChange = useCallback(  (state) => {
        console.log(state)
        if (state == "video cued") {
            registrarMusica()
            onChangeDisplay("Block")
        }

        if (state === "unstarted") {
            onChangeDisplay("none")
            Alert.alert("Error url video");
        }


        if (state === "ended") {
            Alert.alert("video has finished playing!");
        }
    }, []);



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={{display:display}}>
                    {/*<YoutubePlayer*/}
                    {/*    height={styles.image.height}*/}
                    {/*    play={playing}*/}
                    {/*    videoId={videoId}*/}
                    {/*    onChangeState={onStateChange}*/}
                    {/*/>*/}
                </View>

                <TextInput
                    placeholder={"Link"}
                    value={textInput1}
                    onChangeText={onChangeTextInput1}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.button} onPress={() => carrgarInput(textInput1)}>
                    <Text style={styles.text2}>
                        {"Cadastrar"}
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
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
    box: {
        height: 51,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        marginBottom: 84,
        marginHorizontal: 64,
        shadowColor: "#00000040",
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 10,
        elevation: 10,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#2C2C2C",
        borderColor: "#2C2C2C",
        borderRadius: 8,
        borderWidth: 1,
        paddingVertical: 14,
        marginBottom: 203,
        marginHorizontal: 51,
    },
    image: {
        borderRadius: 20,
        height: 282,
        marginBottom: 44,
        marginHorizontal: 64,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    scrollView: {
        flex: 1,
        backgroundColor: "#F2F2F2",
        borderRadius: 20,
        paddingTop: 53,
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
        color: "#000000",
        fontSize: 16,
        marginBottom: 11,
        marginLeft: 67,
    },
    text2: {
        color: "#F5F5F5",
        fontSize: 16,
    },
    view: {
        width: 201,
        alignItems: "center",
        backgroundColor: "#1E1E1E",
        borderColor: "#2C2C2C",
        borderWidth: 1,
        paddingVertical: 28,
    },
    view2: {
        width: 201,
        alignItems: "center",
        backgroundColor: "#2C2C2C",
        borderColor: "#444444",
        borderWidth: 1,
        paddingVertical: 28,
    },
});