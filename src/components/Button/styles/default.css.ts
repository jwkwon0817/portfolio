import { style } from '@vanilla-extract/css';
import { cubicBezier } from '~/lib/constant/cubicBezier';
import { mediaQuery } from '~/lib/utils/styles/mediaQuery';

export const base = style({
  borderRadius: 12,
  background: '#F0F0F0',
  cursor: 'pointer',
  transition: `all 0.2s ${cubicBezier.default}`,
  ':hover': {
    opacity: 0.6,
  },
  ':active': {
    transform: 'scale(0.95)',
  },
});

export const text = style({
  fontSize: 16,
  userSelect: 'none',
  ...mediaQuery.mobile({
    fontSize: 12,
  }),
});
