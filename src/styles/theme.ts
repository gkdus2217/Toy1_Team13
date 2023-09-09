import { DefaultTheme } from 'styled-components';

const colors = {
  // primary:
  // secondary:
  border: '#f2f2f2',
  white: '#ffffff',
  black: '#1D1B26',
};

const fontSize = {
  title: 20,
  subTitle: 16,
  text: 14,
};

export type ColorType = typeof colors;
export type FontSizeType = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};

export default theme;