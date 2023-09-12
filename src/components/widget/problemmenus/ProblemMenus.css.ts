import { style } from '@vanilla-extract/css';

export const ButtonList = style({
  display: 'flex',
  justifyContent: 'flex-start',
  paddingLeft: '0',
  margin: '50px 0',
  listStyle: 'none',
});

export const SingleButton = style({
  padding: '10px 70px',
  borderRight: '1px solid black',
  selectors: {
    '&.isFirst': {
      padding: '10px 70px 10px 5px',
    },
    '&.isLast': {
      borderRight: 'none',
    },
  },
});
