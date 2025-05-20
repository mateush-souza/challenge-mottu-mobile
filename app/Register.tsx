import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

/**
 * Tela de cadastro de novos usuários
 */
export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const handleRegister = () => {
    console.log('Cadastro com:', email, fullName, registrationNumber, password);
    navigation.navigate('Login');
  };
  
  return (
    <KeyboardAvoidingView 
      className="flex-1 bg-white" 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 items-center justify-center px-8 pt-10">
          <View className="w-full max-w-sm items-center">
            <Image 
              source={require('../assets/images/logo.png')} 
              className="w-32 h-32 mb-6"
              resizeMode="contain"
            />
            
            <Text className="text-xl font-bold mb-6">MotoConnect</Text>
            
            <TextInput
              className="w-full h-12 px-4 mb-4 border border-gray-300 rounded-md"
              placeholder="Email da Mottu"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            
            <TextInput
              className="w-full h-12 px-4 mb-4 border border-gray-300 rounded-md"
              placeholder="Nome Completo"
              value={fullName}
              onChangeText={setFullName}
            />
            
            <TextInput
              className="w-full h-12 px-4 mb-4 border border-gray-300 rounded-md"
              placeholder="Número de registro"
              keyboardType="number-pad"
              value={registrationNumber}
              onChangeText={setRegistrationNumber}
            />
            
            <TextInput
              className="w-full h-12 px-4 mb-6 border border-gray-300 rounded-md"
              placeholder="Senha"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            
            <TouchableOpacity 
              className="w-full h-12 bg-blue-700 rounded-md items-center justify-center"
              onPress={handleRegister}
            >
              <Text className="text-white font-medium">Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      
      {/* Design elements at bottom */}
      <View className="h-16 w-full overflow-hidden">
        <View className="absolute bottom-0 right-0 w-full">
          <View className="h-16 bg-blue-700" />
          <View className="h-8 mt-1 bg-blue-700" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}