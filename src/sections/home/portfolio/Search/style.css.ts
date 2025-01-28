import { style } from '@vanilla-extract/css';
import { mediaQuery } from '~/lib/utils/styles/mediaQuery';

export const base = style({
  width: 450,
  ...mediaQuery.mobileDesktop({
    width: 350,
  }),
  ...mediaQuery.mobile({
    width: 300,
  }),
});

export const input = style({
  border: '1px solid #d2d2d2',
  borderRadius: 8,
  padding: '12px 14px',
  width: '100%',
  cursor: 'text',
  fontSize: 14,

  '::placeholder': {
    fontSize: 14,
    color: '#acacac',
  },
});

export const searchButton = style({
  background: '#000',
  borderRadius: 6,
  cursor: 'pointer',
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  ':hover': {
    opacity: 0.6,
  },
  ':active': {
    transform: 'scale(0.95)',
  },
  userSelect: 'none',
});

export const searchResult = style({
  borderRadius: 20,
  background: 'rgba(0, 0, 0, 0.15);',
});
