import { style } from '@vanilla-extract/css';

export const base = style({
  borderRadius: 12,
  background: '#f7f7f7',
  cursor: 'pointer',
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  ':hover': {
    opacity: 0.6,
  },
  ':active': {
    transform: 'scale(0.95)',
  },
});

export const privateButton = style({
  background: '##B5B5B5',
  cursor: 'not-allowed',
});
