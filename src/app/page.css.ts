import { style } from '@vanilla-extract/css';
import { mediaQuery } from '~/lib/utils/styles/mediaQuery';

export const base = style({});

export const wrapper = style({
  height: '100vh',
  overflowY: 'scroll',
  padding: '20px 0',
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
