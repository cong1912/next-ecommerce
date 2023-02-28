// theme.ts

// 1. import `extendTheme` function
import { extendTheme, theme as base, type ThemeConfig } from '@chakra-ui/react'
import { colors } from './colors'
import { fontSizes } from './fontSizes'
import { Button } from './components/button'
import { IconButton } from './components/icon-button';
// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const overrides = {
  components: {
    Button,
    IconButton
  },
  colors,
  fontSizes,
  config,
}
// 3. extend the theme
const theme = extendTheme(overrides)

export default theme
