export const size = {
  largest: '75em', // 1200px
  large: '56.25em', // 900px
  medium: '37.5em', // 600px
  small: '31.25em', // 500px
  smallest: '25em', // 400px
};

const theme = {
  BACKGROUND_COLOR: '#ffffff',
  PRIMARY_FONT: '#000000',

  PRIMARY_COLOR: '#19CE60',
  WARNING_COLOR: '#ff4d4f',

  mq: {
    laptop: `@media only screen and (min-width: ${size.largest})`,
    tablet: `@media only screen and (min-width: ${size.large})`,
    mobile: `@media only screen and (min-width: ${size.small})`,
  },
};

export default theme;

export type ThemeType = typeof theme;
