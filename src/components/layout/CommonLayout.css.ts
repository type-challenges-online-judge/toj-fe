import { style } from '@vanilla-extract/css';

export const CommonLayoutStyle = style({
  maxWidth: '1200px',
  margin: '0 auto',
  minHeight: 'calc(100vh - 61.77px)',

  '@media': {
    'screen and (min-width: 768px)': {
      padding: '0 60px',
    },
    'screen and (max-width: 767px)': {
      padding: '0 25px',
    },
  },
});
