import { style } from '@vanilla-extract/css';

export const disableUserSelect = style({
  userSelect: 'none',
});

export const noWrap = style({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
