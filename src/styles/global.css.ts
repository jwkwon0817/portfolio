import { globalStyle } from '@vanilla-extract/css';
import '@/styles/fonts/index.css';
import { inspireFontKit } from '@/styles/fonts/index.css';
import './reset.css';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
});

globalStyle('*', {
  boxSizing: 'border-box',
  fontFamily: inspireFontKit,
  color: '#000',
  lineHeight: 1.4,
  fontWeight: 400,
  letterSpacing: '-0.01',
});
