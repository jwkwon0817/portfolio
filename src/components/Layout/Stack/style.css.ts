import { style } from '@vanilla-extract/css';

export const base = style({
  display: 'flex',
  width: 'fit-content',
  height: 'fit-content',
});

export const vertical = style({
  flexDirection: 'column',
});

export const verticalReverse = style({
  flexDirection: 'column-reverse',
});

export const horizontal = style({
  flexDirection: 'row',
});

export const horizontalReverse = style({
  flexDirection: 'row-reverse',
});

export const fullWidth = style({
  width: '100%',
});

export const fullHeight = style({
  height: '100%',
});
