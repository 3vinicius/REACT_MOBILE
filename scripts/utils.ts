import {router} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class Utils {


    verifiUserAuthentic(){
        return AsyncStorage.getItem("EMAIL").then(result=> {
          return result != null
        }).then(result => result)
    }

    routerForLogin(){
        router.push("/_layout/index");
    }

    buscarEmail(){
        return AsyncStorage.getItem("EMAIL").then(value => value)
    }

    buscarPassword(){
        return AsyncStorage.getItem("PASSWORD").then(value => value)
    }
}