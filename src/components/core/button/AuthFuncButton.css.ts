import { style } from '@vanilla-extract/css';

export const AuthFuncButtonStyle = style({
  display: 'flex',
  alignItems: 'center',
  padding: '5px 32px',
  border: '1px solid black',
  borderRadius: '20px',
  backgroundColor: 'transparent',
  cursor: 'pointer',
});

export const ButtonTextStyle = style({
  marginLeft: '10px',
  fontSize: '0.9rem',
  fontWeight: 'bolder',
});
