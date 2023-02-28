// Libraries
import React, { memo } from 'react';
import {
  IconButton as IconButtonChakra,
  IconButtonProps as IconButtonPropsChakra
} from '@chakra-ui/react';

interface IconButtonProps extends IconButtonPropsChakra {
  isLoading?: boolean;
  isDisabled?: boolean;
  color?: string;
  className?: string;
  backgroundColor?: string;
  label?: string;
  size?: 'default' | 'lg' | 'md' | 'sm' | 'xs';
  variant?: 'default' | 'ghost' | 'outline' | 'solid' | 'link' | 'unstyled';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButtonBase = ({
  size = 'default',
  variant = 'default',
  isDisabled = false,
  isLoading = false,
  color,
  backgroundColor,
  label,
  ...props
}: IconButtonProps) => {
  return (
    <IconButtonChakra
      h="32px"
      minWidth="32px"
      fontSize="default"
      variant={variant}
      isDisabled={isDisabled}
      isLoading={isLoading}
      color={color}
      backgroundColor={backgroundColor}
      {...props}
    >
      {label}
    </IconButtonChakra>
  );
};

export const IconButton = memo(IconButtonBase);
