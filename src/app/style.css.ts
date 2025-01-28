import { style } from '@vanilla-extract/css';
import { mediaQuery } from '~/lib/utils/styles/mediaQuery';

export const base = style({
  maxWidth: 1300,
  ...mediaQuery.mobileDesktop({
    maxWidth: 900,
  }),
  ...mediaQuery.mobile({
    maxWidth: 330,
  }),
});
