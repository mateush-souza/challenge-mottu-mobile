// screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import Logo from '../components/ui/Logo';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function LoginScreen() {
  const [email, setEmail]   = useState('');
  const [password, setPass] = useState('');
  const [loading, setLoad]  = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    setLoad(true);
    setTimeout(() => setLoad(false), 1500);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <View className="flex-1 items-center pt-20">
          <Logo size="large" />
          <Text className="text-2xl font-bold mt-2">MotoConnect</Text>

          <View className="w-4/5 max-w-md mt-10">
            <Input
              className='bg-red-50'
              placeholder="Email:"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <Input
              placeholder="Senha:"
              secureTextEntry
              value={password}
              onChangeText={setPass}
            />

            <View className="flex-row items-center justify-between mt-4">
              <Button
                title="Entrar"
                loading={loading}
                onPress={handleLogin}
                fullWidth={false} 
                className="w-28"
              />

              <View className="flex-row">
                <Text className="text-gray-600">Não tem conta? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                  <Text className="text-blue-700 font-medium">Cadastre-se</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View className="absolute bottom-0 left-0 right-0 h-56 overflow-hidden">
          <View
            className="absolute -bottom-4 -left-1/2 w-[200%] h-20 bg-blue-800"
            style={{ transform:[{ rotate: '-25deg'}] }}
          />
          <View
            className="absolute -bottom-24 -left-1/2 w-[200%] h-20 bg-blue-800"
            style={{ transform:[{ rotate: '-25deg'}] }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
