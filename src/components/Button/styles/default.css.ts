import { style } from '@vanilla-extract/css';
import { cubicBezier } from '~/lib/constant/cubicBezier';

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
