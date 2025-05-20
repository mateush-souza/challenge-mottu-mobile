import React from 'react';
import { View, Image, Text, ImageSourcePropType } from 'react-native';

type LogoProps = {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  bordered?: boolean;
  customSource?: ImageSourcePropType;
};

export default function Logo({ 
  size = 'medium', 
  showText = false,
  bordered = false,
  customSource
}: LogoProps) {
  const sizeStyles = {
    small: 'w-24 h-24',
    medium: 'w-32 h-32',
    large: 'w-40 h-40',
  };

  const imageSource = customSource || require('../../assets/images/logo.png');
  
  return (
    <View className="items-center">
      <View className={`${bordered ? 'border border-blue-400 rounded-sm p-1' : ''}`}>
        <Image 
          source={imageSource} 
          className={sizeStyles[size]}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}