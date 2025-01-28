import { style } from '@vanilla-extract/css';
import { mediaQuery } from '~/lib/utils/styles/mediaQuery';

export const base = style({
  width: '100%',
  height: '100vh',
});

export const button = style({
  position: 'absolute',
  bottom: 32,
});

export const container = style({
  maxWidth: 1300,
  ...mediaQuery.mobileDesktop({
    maxWidth: 900,
  }),
  ...mediaQuery.mobile({
    maxWidth: 330,
  }),
});
