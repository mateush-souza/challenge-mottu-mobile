import React, { useState } from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  helper?: string;
};

export default function Input({
  label,
  error,
  helper,
  placeholder,
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const getBorderColor = () => {
  if (error)   return 'border-red-500';
  if (isFocused) return 'border-blue-700';
  return 'border-blue-700';
};


  return (
    <View className="w-full mb-4">
      {label && (
        <Text className="mb-1 text-red-700 font-medium">{label}</Text>
      )}

      <TextInput
        className={`h-12 px-5 border-2 rounded-full ${getBorderColor()}`}
        placeholderTextColor="#9CA3AF"
        placeholder={placeholder}
        {...props}
      />

      {error && (
        <Text className="mt-1 text-red-500 text-xs">{error}</Text>
      )}

      {helper && !error && (
        <Text className="mt-1 text-gray-500 text-xs">{helper}</Text>
      )}
    </View>
  );
}