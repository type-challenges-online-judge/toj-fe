import { style } from '@vanilla-extract/css';

export const ButtonList = style({
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  justifyContent: 'flex-start',
  paddingLeft: '0',
});

export const Title = style({
  marginRight: '50px',
});

export const MenuButton = style({
  backgroundColor: 'transparent',
  padding: '0 100px',
  border: 'none',
  borderLeft: '1px solid black',
});
