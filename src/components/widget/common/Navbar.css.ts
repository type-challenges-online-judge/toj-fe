import { style } from '@vanilla-extract/css';

export const NavbarStyle = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  padding: '20px 0 14px',
});

export const LogoStyle = style({
  margin: '0 !important',
  fontWeight: '700',
  fontSize: '17px',
  color: 'black',
});
