import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, } from "react-native";
export default (props) => {
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
                    paddingTop: 18,
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
                    source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32e5d2ce-852d-4f66-b4aa-505c05885519"}}
                    resizeMode = {"stretch"}
                    style={{
                        borderRadius: 5,
                        height: 192,
                        marginBottom: 77,
                        marginHorizontal: 84,
                    }}
                />
                <Text
                    style={{
                        color: "#000000",
                        fontSize: 16,
                        marginBottom: 13,
                        marginLeft: 66,
                    }}>
                    {"Nome"}
                </Text>
                <View
                    style={{
                        height: 51,
                        backgroundColor: "#FFFFFF",
                        borderRadius: 10,
                        marginBottom: 24,
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
                </View>
                <Text
                    style={{
                        color: "#000000",
                        fontSize: 16,
                        marginBottom: 14,
                        marginLeft: 66,
                    }}>
                    {"Email"}
                </Text>
                <View
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
                </View>
                <Text
                    style={{
                        color: "#000000",
                        fontSize: 16,
                        marginBottom: 13,
                        marginLeft: 64,
                    }}>
                    {"Senha"}
                </Text>
                <View
                    style={{
                        height: 51,
                        backgroundColor: "#FFFFFF",
                        borderRadius: 10,
                        marginBottom: 24,
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
                </View>
                <Text
                    style={{
                        color: "#000000",
                        fontSize: 16,
                        marginBottom: 14,
                        marginLeft: 65,
                    }}>
                    {"Telefone"}
                </Text>
                <View
                    style={{
                        height: 51,
                        backgroundColor: "#FFFFFF",
                        borderRadius: 10,
                        marginBottom: 40,
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
                </View>
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        backgroundColor: "#2C2C2C",
                        borderColor: "#2C2C2C",
                        borderRadius: 8,
                        borderWidth: 1,
                        paddingVertical: 14,
                        marginHorizontal: 51,
                        marginBottom: 50
                    }} onPress={()=>alert('Pressed!')}>
                    <Text
                        style={{
                            color: "#F5F5F5",
                            fontSize: 16,
                        }}>
                        {"Registrar"}
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}