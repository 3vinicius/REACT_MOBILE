import {router, Tabs} from 'expo-router';
import React, {useEffect, useState} from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {Service} from "@/scripts/service"
import {AsyncStorage} from "@react-native-async-storage/async-storage"


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const service = new Service();
  const [autenticate, setAutenticate] = useState(false);

    async function autenticar(){
        const email = await AsyncStorage.getItem("EMAIL")
        const password = await AsyncStorage.getItem("PASSWORD")
        if( email != null && password != null) {
            if (await service.autenticarUsuario(email,password) === true){
                router.push("/autentic/musics")
            }
        }
    }


    useEffect( () => {
        autenticar().then(r => r)
    }, []);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
        <Tabs.Screen
        name="index"
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: 'Registrar',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
