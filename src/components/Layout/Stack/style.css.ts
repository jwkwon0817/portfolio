import { style } from '@vanilla-extract/css';

export const base = style({
  display: 'flex',
  width: 'fit-content',
});

export const vertical = style({
  flexDirection: 'column',
});

export const horizontal = style({
  flexDirection: 'row',
});

export const fullWidth = style({
  width: '100%',
});
