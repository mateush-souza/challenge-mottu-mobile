import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  ActivityIndicator,
  TouchableOpacityProps 
} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  fullWidth?: boolean;
};

/**
 * Componente de botão personalizado
 */
export default function Button({ 
  title, 
  variant = 'primary', 
  loading = false, 
  fullWidth = true,
  disabled,
  ...props 
}: ButtonProps) {
  // Configura os estilos com base na variante
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-700';
      case 'secondary':
        return 'bg-gray-200';
      case 'outline':
        return 'bg-transparent border border-blue-700';
      default:
        return 'bg-blue-700';
    }
  };
  
  const getTextStyle = () => {
    switch (variant) {
      case 'primary':
        return 'text-white';
      case 'secondary':
        return 'text-gray-800';
      case 'outline':
        return 'text-blue-700';
      default:
        return 'text-white';
    }
  };
  
  const buttonClasses = `h-11 rounded-full items-center justify-center
  ${getButtonStyle()}
  ${disabled ? 'opacity-50' : ''}
  ${fullWidth ? 'w-full' : ''}
`;

    
  const textClasses = `font-medium ${getTextStyle()}`;
  
  return (
    <TouchableOpacity 
      className={buttonClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'outline' ? '#0064a4' : '#ffffff'} 
          size="small" 
        />
      ) : (
        <Text className={textClasses}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}