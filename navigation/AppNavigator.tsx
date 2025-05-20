
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

// Importação das telas
import SplashScreen from '../app/Splash';
import LoginScreen from '../app/Login';
import RegisterScreen from '../app/Register';

const Stack = createNativeStackNavigator<RootStackParamList>();

// Removido o NavigationContainer daqui, pois ele será usado no App.tsx
export default function AppNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Splash"
      screenOptions={{ 
        headerShown: false,
        contentStyle: { backgroundColor: 'white' }
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      {/* Adicione outras telas aqui conforme necessário */}
    </Stack.Navigator>
  );
}