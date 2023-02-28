export const Button = {
  sizes: {
    default: {
      px: '20px',
      py: '10px',
      fontSize: 'default'
    }
  },

  baseStyle: {
    _hover: {
      _disabled: {
        bg: ''
      }
    },
    _focus: {
      boxShadow: ''
    }
  },

  variants: {
    primary: {
      bg: 'default.primary',
      color: 'default.light'
    },

    outline: {
      bg: 'default.light',
      color: 'default.primary'
    },

    danger: {
      bg: 'default.red',
      color: 'default.light'
    },

    default: {
      bg: 'default.grey.300',
      color: 'default.light'
    }
  }
};
