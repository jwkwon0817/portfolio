import '~/styles/layer.css';
import { inspireFontKit } from './fonts/index.css';
import { resetGlobalStyle } from './layer.css';

resetGlobalStyle('html, body', {
  wordBreak: 'keep-all',
  wordWrap: 'break-word',
  scrollBehavior: 'smooth',
});

resetGlobalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  fontFamily: inspireFontKit,
  fontSynthesis: 'none',
});

resetGlobalStyle('*:focus', {
  outline: 'none',
});

resetGlobalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
});

resetGlobalStyle('input, textarea, button', {
  fontFamily: 'inherit',
  color: 'inherit',
  background: 'transparent',
  border: 'none',
  outline: 'none',
});

resetGlobalStyle('::-webkit-scrollbar', {
  display: 'none',
});
