import { style } from '@vanilla-extract/css';

export const NavbarStyle = style({
  display: 'flex',
  alignItems: 'center',

  '@media': {
    'screen and (min-width: 1200px)': {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px 0 14px',
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
  padding: '0',
  backgroundColor: 'white',
  border: 'none',
  fontWeight: '700',
  fontSize: '1.7rem',
  color: 'black',
  cursor: 'pointer',
});

export const AuthFuncButtonStyle = style({
  display: 'flex',
  margin: '0 0 0 auto',
  gap: '20px',
});
