import { style } from '@vanilla-extract/css';
import { cubicBezier } from '~/lib/constant/cubicBezier';

export const container = style({
  position: 'relative',
});

export const base = style({
  borderRadius: 12,
  border: '1.5px solid #6b6b6b',
  transition: `all 0.2s ${cubicBezier.default}`,
  cursor: 'pointer',
  ':hover': {
    opacity: 0.6,
  },
  ':active': {
    transform: 'scale(0.95)',
  },
});

export const instagram = style({
  position: 'relative',
  border: '1.5px solid transparent',
  backgroundImage: `linear-gradient(#fff, #fff), linear-gradient(45deg, #833AB4 0%, #FD1D1D 50%, #FCB045 100%)`,
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
});

export const tooltip = style({
  width: 'fit-content',
  background: '#6b6b6b',
  borderRadius: 8,
  cursor: 'pointer',
  transition: `opacity 0.2s ${cubicBezier.default}, transform 0.2s ${cubicBezier.default}`,
  ':hover': {
    opacity: 0.6,
  },
  ':active': {
    transform: 'scale(0.95)',
  },
});
