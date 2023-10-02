import { style } from '@vanilla-extract/css';

export const CodeInputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'center',
  margin: '100px 0',
});

export const CodeInput = style({
  marginBottom: '10px',
  border: '1px solid #F4F6F8',
});
