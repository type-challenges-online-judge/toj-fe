import { style } from '@vanilla-extract/css';

export const SignButtonStyle = style({
  display: 'flex',
  alignItems: 'center',
  margin: '0 0 0 auto',
  padding: '5px 32px',
  border: '1px solid black',
  borderRadius: '20px',
  backgroundColor: 'white',
  cursor: 'pointer',
});

export const ButtonTextStyle = style({
  marginLeft: '10px',
});
export const SignButtonTextStyle = style({
  fontSize: '17px',
});
