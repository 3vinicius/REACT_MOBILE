import React, {useCallback, useEffect, useState} from "react";
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

import YoutubePlayer, {getYoutubeMeta} from "react-native-youtube-iframe";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    convertAnimationObjectToKeyframes
} from "react-native-reanimated/lib/typescript/layoutReanimation/web/animationParser";
import {router} from "expo-router";
import {Utils} from "@/scripts/utils";

export default (props) => {



    const [textInput1, onChangeTextInput1] = useState('');
    const [videoId, onChangeVideoId] = useState('');
    const [email, onChangeEmail] = useState('');
    const [display, onChangeDisplay] = useState('none')

    const regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;


    const service = new Service();
    const utils = new Utils();


    const [playing, setPlaying] = useState(false);

    function carrgarInput(text: string){
        try {
            onChangeVideoId(textInput1.match(regex)[1])
            registrarMusica().then(() => onChangeDisplay("Block"))
        } catch (e) {
            Alert.alert("Informe um Link valido ")
            onChangeDisplay("none")
        }
    }


    useEffect(() => {
        utils.buscarEmail().then(email => {
            if(email === null){
                utils.routerForLogin()
            }
            onChangeEmail(email)
        })
    }, []);


    async function registrarMusica(){
        const meta  =  await getYoutubeMeta(videoId).then(meta => {
            return meta
        });

        let email = await utils.buscarEmail()

        try {
            const result = await service.registrarMusica(meta.title,textInput1,email,meta.thumbnail_url)
            if (result === "Registre sucessful") {
                Alert.alert("Video registrado com sucesso")
            } else if (result == "music has registred"){
                Alert.alert("Essa musica já está cadastrada")
            }
        } catch (e) {
            console.log(e.message)
        }

    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={{display:display}}>
                    <YoutubePlayer
                        height={styles.image.height}
                        play={playing}
                        videoId={videoId}
                    />
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