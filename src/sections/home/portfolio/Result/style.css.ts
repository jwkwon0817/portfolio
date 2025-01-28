import { style } from '@vanilla-extract/css';
import { mediaQuery } from '~/lib/utils/styles/mediaQuery';

export const image = style({
  borderRadius: 20,
  ...mediaQuery.mobileDesktop({
    borderRadius: 16,
  }),
  ...mediaQuery.mobile({
    borderRadius: 12,
  }),
});

export const skills = style({
  flexWrap: 'wrap',
});

export const links = style({
  flexWrap: 'wrap',
});
