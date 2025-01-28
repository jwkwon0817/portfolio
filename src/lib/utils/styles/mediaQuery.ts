import { breakpoints } from '@/lib/constant/breakpoint';
import { CSSProperties } from '@vanilla-extract/css';

export const mediaQuery = {
  mobile: (styles: CSSProperties) => ({
    '@media': {
      [breakpoints.mobile]: styles,
    },
  }),
  mobileDesktop: (styles: CSSProperties) => ({
    '@media': {
      [breakpoints.mobileDesktop]: styles,
    },
  }),
  desktop: (styles: CSSProperties) => ({
    '@media': {
      [breakpoints.desktop]: styles,
    },
  }),
};
