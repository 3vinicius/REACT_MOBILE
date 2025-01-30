import React, {useEffect, useState} from "react";
import {
    SafeAreaView,
    View,
    ScrollView,
    Image,
    TextInput,
    Text,
    StyleSheet,
    TouchableOpacity,
    Button, ActivityIndicator, Alert,
} from "react-native";
import {Service} from "@/scripts/service";
import YoutubePlayer, {getYoutubeMeta} from "react-native-youtube-iframe";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default (props) => {

    const imageUnlike = 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac2ce476-71da-4eb8-badb-ca9a21cfac96'
    const imageLike = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98acf552-1cfb-4736-809b-a8d2c5ae5a8d"

    const service = new Service();
    const [textInput1, onChangeTextInput1] = useState('');
    const [defaultImage, onChangeTextDefaultImage] = useState(0);
    const initialImages = []
    const [imageSources, setImageSources] = useState(initialImages);
    const [objectSources, setObjectSources] = useState([]);




    const [musicas, setMusicas] = useState([]);
    const [loading, setLoading] = useState(true);

    const email = "teste"



    async function trazerDados() {
        const resultado = await service.buscarMusicasCurtidas(email);
        console.log(resultado)
        let array = resultado.length;
        const initialImageArray = Array(array).fill(imageUnlike); // Atualize `imageSources` com a lógica correta
        const musicsComponet = resultado.map((element) => {
            if (element.thumbnail === null) {
                element.thumbnail = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e03e495a-8596-4cab-a33a-703e023e41e5";
            }
            return { music: element, source: imageUnlike }; // Não modifique o valor de source aqui
        });
        setImageSources(initialImageArray);
        setObjectSources(musicsComponet);
    }


    useEffect(() => {
        setTimeout(() => {
            if (objectSources.length > 0) {
                setLoading(false)
            }
        }, 1500)
    }, [objectSources]);


    useEffect(() => {
        trazerDados();
    }, []);


    const handleImageClick = async (index) => {
        if (objectSources[index].music.likedUser == 1 ){
        await  service.unLikeMusic(objectSources[index].music.id,email)
        } else {
            console.log("likee")
            await  service.likeMusic(objectSources[index].music.id,email)
        }
     await trazerDados()
    };


    function musicsLikes(likedUser?: number){
        return likedUser == null ? imageUnlike: imageLike
    }


    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    } else {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    {objectSources.length === 0 ? (
                        <Text>Carregando músicas...</Text>
                    ) : (
                        objectSources.map((musicComponet, index) => (
                            <View key={index} style={styles.styleFlex}>
                                <View style={styles.itemContainer}>
                                    <Image
                                        source={{ uri: musicComponet.music.thumbnail }}
                                        resizeMode={"stretch"}
                                        style={styles.image}
                                    />
                                    <Text style={styles.fontSize}>{musicComponet.music.title}</Text>
                                </View>
                                <TouchableOpacity onPress={() => handleImageClick(index)}>
                                    <Image
                                        source={{ uri: musicsLikes(musicComponet.music.likedUser)}}
                                        resizeMode={"stretch"}
                                        style={styles.image3}
                                    />
                                    <Text style={styles.textTotalSize}>{musicComponet.music.totalLikes}</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    )}
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
        );
    }
}



const styles = StyleSheet.create({
    textTotalSize: {
        fontSize: 10,
        textAlign: "end",
        lineHeight: 10,
        transform: "translateY(-5px)"
    },
    fontSize: {
      fontSize: 10,
    },
    styleFlex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
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
        width: 200
    },
    image2: {
        borderRadius: 10,
        height: 90,
    },
    image3: {
        width: 50,
        height: 25,
    },
    image4: {
        width: 50,
        height: 26,
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
    itemContainer: {
        display: "flex",
        alignItems: "center",
        paddingBottom: 20
    }
});
