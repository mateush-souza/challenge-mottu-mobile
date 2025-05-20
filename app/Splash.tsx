import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import Logo from '../components/ui/Logo';

/**
 * Tela de carregamento inicial do aplicativo
 */
export default function SplashScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  useEffect(() => {
    // Simula um tempo de carregamento e navega para a tela de login
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [navigation]);
  
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Logo />
      <View>
        <ActivityIndicator size="large" color="#0064a4" />
      </View>
      
      {/* Barra de progresso simplificada */}
      <View className="w-3/4 h-2 bg-gray-200 rounded-full mt-5">
        <View className="w-1/2 h-2 bg-blue-700 rounded-full" />
      </View>
    </View>
  );
}