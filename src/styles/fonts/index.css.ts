import { globalFontFace } from '@vanilla-extract/css';
import { weight } from './values/weight';

export const inspireFontKit = 'INSPIRE Font Kit';

globalFontFace(
  inspireFontKit,
  Object.entries(weight).map(([name, weight]) => ({
    src: `url(${
      process.env.NEXT_PUBLIC_URL || ''
    }/fonts/INSPIRE_Font_Kit-${capitalizeFirstLetter(
      name,
    )}.woff2) format('woff2')`,
    fontWeight: weight,
    fontDisplay: 'block',
  })),
);

function capitalizeFirstLetter(str: string) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
