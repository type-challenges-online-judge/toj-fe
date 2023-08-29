import { style } from '@vanilla-extract/css';

export const NavbarStyle = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',

  '@media': {
    'screen and (min-width: 1200px)': {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      padding: '20px 60px 14px',
    },
    'screen and (max-width: 767px)': {
      padding: '20px 25px 14px',
    },
  },
});

export const LogoStyle = style({
  margin: '0 !important',
  fontWeight: '700',
  fontSize: '17px',
  color: 'black',
});
