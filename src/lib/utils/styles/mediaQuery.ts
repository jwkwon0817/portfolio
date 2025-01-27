import { CSSProperties } from '@vanilla-extract/css';
import { breakpoints } from '~/lib/constant/breakpoint';

export const mediaQuery = {
  mobile: (styles: CSSProperties) => ({
    '@media': {
      [breakpoints.mobile]: styles,
    },
  }),
  desktop: (styles: CSSProperties) => ({
    '@media': {
      [breakpoints.desktop]: styles,
    },
  }),
};
