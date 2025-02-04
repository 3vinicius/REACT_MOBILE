
import React, {useEffect, useState} from "react";
import {
    SafeAreaView,
    View,
    ScrollView,
    Image,
    Text,
    TouchableOpacity,
    Button,
    Linking,
    Alert,
    TextInput,
} from "react-native";
import {Link, router} from "expo-router";
import {Service} from "@/scripts/service";

import AsyncStorage from '@react-native-async-storage/async-storage';
import {Utils} from "@/scripts/utils";
export default (props) => {

    function goToNext(){
        router.push("/autentic/musics")
    }

    const [email, onChangeEmail] = useState(null);
    const [password, onChangePassword] = useState(null);

    const service = new Service();
    const utils = new Utils()

    useEffect(() => {

       utils.verifiUserAuthentic().then(auth => {
           if (auth) {
               utils.buscarEmail().then(result => {
                       onChangeEmail(result)
                   }
               )
               utils.buscarPassword().then(result => {
                   onChangePassword(result)
               })
               goToNext()
           }
       })
    }, []);

    async function autenticationUser(){

        const result = await service.autenticarUsuario(email,password)
        if (result === true){
            try {
                await AsyncStorage.setItem("EMAIL", email)
                await AsyncStorage.setItem("PASSWORD", password)
                goToNext();
            } catch (e) {
                console.log(e)
            }
        } else {
            Alert.alert("Email ou senha incorreta")
        }
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}>
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#F2F2F2",
                    borderRadius: 20,
                    paddingTop: 61,
                    shadowColor: "#00000040",
                    shadowOpacity: 0.3,
                    shadowOffset: {
                        width: 0,
                        height: 4
                    },
                    shadowRadius: 4,
                    elevation: 4,
                }}>
                <Image
                    source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e04689b-3e25-4a74-bbd6-b1d9366a40b4"}}
                    resizeMode = {"stretch"}
                    style={{
                        borderRadius: 5,
                        height: 192,
                        marginBottom: 112,
                        marginHorizontal: 84,
                    }}
                />
                <Text
                    style={{
                        color: "#000000",
                        fontSize: 16,
                        marginBottom: 14,
                        marginLeft: 66,
                    }}>
                    {"Email"}
                </Text>
                <TextInput onChangeText={onChangeEmail}
                           textContentType={"emailAddress"}
                           style={{
                               height: 51,
                               backgroundColor: "#FFFFFF",
                               borderRadius: 10,
                               marginBottom: 25,
                               marginHorizontal: 65,
                               shadowColor: "#00000040",
                               shadowOpacity: 0.3,
                               shadowOffset: {
                                   width: 0,
                                   height: 4
                               },
                               shadowRadius: 10,
                               elevation: 10,
                           }}>
                </TextInput>
                <Text
                    style={{
                        color: "#000000",
                        fontSize: 16,
                        marginBottom: 13,
                        marginLeft: 64,
                    }}>
                    {"Senha"}
                </Text>
                <TextInput onChangeText={onChangePassword}
                           textContentType={"password"}
                           secureTextEntry={true}
                           style={{
                               height: 51,
                               backgroundColor: "#FFFFFF",
                               borderRadius: 10,
                               marginBottom: 50,
                               marginHorizontal: 64,
                               shadowColor: "#00000040",
                               shadowOpacity: 0.3,
                               shadowOffset: {
                                   width: 0,
                                   height: 4
                               },
                               shadowRadius: 10,
                               elevation: 10,
                           }}>
                </TextInput>
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        backgroundColor: "#2C2C2C",
                        borderColor: "#2C2C2C",
                        borderRadius: 8,
                        borderWidth: 1,
                        paddingVertical: 14,
                        marginBottom: 21,
                        marginHorizontal: 51,
                    }} onPress={()=>autenticationUser()}>

                    <Text
                        style={{
                            color: "#F5F5F5",
                            fontSize: 16,
                        }}>
                        {"Login"}
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
