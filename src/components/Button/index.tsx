// Libraries
import React, { memo } from 'react';
import {
  Button as ButtonChakra,
  ButtonProps as ButtonPropsChakra
} from '@chakra-ui/react';

interface ButtonProps extends ButtonPropsChakra {
  label: string;
  className?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  size?: 'default' | 'lg' | 'md' | 'sm' | 'xs';
  variant?: 'default' | 'primary' | 'secondary' | 'danger' | 'outline';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonBase = ({
  size = 'default',
  children,
  label,
  backgroundColor,
  isDisabled = false,
  onClick,
  className = '',
  variant = 'default',
  ...props
}: ButtonProps) => {
  return (
    <ButtonChakra
      size={size}
      onClick={onClick}
      variant={variant}
      backgroundColor={backgroundColor}
      isDisabled={isDisabled}
      {...props}
    >
      {label}
      {children}
    </ButtonChakra>
  );
};

export const Button = memo(ButtonBase);
