import { style } from '@vanilla-extract/css';

export const FooterStyle = style({
  minWidth: '800px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '164px',
  backgroundColor: '#5F5F5F',
});

export const CopyrightStyle = style({
  width: '100%',
  margin: '0 !important',
  fontSize: '17px',
  color: 'white',

  '@media': {
    'screen and (min-width: 768px)': {
      padding: '0 60px',
    },
    'screen and (max-width: 767px)': {
      padding: '0 25px',
    },
  },
});
