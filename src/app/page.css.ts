import { style } from '@vanilla-extract/css';
import { mediaQuery } from './../lib/utils/styles/mediaQuery';

export const base = style({
  overflowY: 'scroll',
});

export const wrapper = style({
  ...mediaQuery.mobileDesktop({
    height: '100vh',
  }),
  ...mediaQuery.desktop({
    height: '100vh',
  }),
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

export const portfolioWrapper = style({
  maxWidth: 1300,
  padding: '60px 0',
  ...mediaQuery.mobileDesktop({
    maxWidth: 600,
  }),
  ...mediaQuery.mobile({
    maxWidth: 300,
  }),
});
