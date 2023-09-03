import { style } from '@vanilla-extract/css';

export const ButtonList = style({
  display: 'flex',
  alignItems: 'stretch',
  listStyle: 'none',
  justifyContent: 'flex-start',
  paddingLeft: '0',
});

export const MenuButton = style({
  backgroundColor: 'transparent',
  padding: '0 100px',
  border: 'none',
  borderRight: '1px solid black',
  height: '100%',
});
