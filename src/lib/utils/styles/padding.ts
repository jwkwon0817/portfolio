import { Padding } from '@/lib/types/padding';

const getPaddingString = (padding: Padding) => {
  if (typeof padding === 'number') {
    return `${padding}px`;
  }

  if (Array.isArray(padding)) {
    return padding.map((p) => `${p}px`).join(' ');
  }

  return padding;
};

export { getPaddingString };
