import { style } from '@vanilla-extract/css';

export const MenuButton = style({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  border: 'none',
  backgroundColor: 'transparent',
  fontWeight: 'bolder',
  cursor: 'pointer',
});

export const ProblemDiffAndId = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '20px',
  padding: '0 10px',
  marginRight: '5px',
  borderRadius: '5px',
  color: 'white',

  selectors: {
    '&.warm': {
      backgroundColor: '#0F8383',
    },
    '&.easy': {
      backgroundColor: '#81AE1F',
    },
    '&.medium': {
      backgroundColor: '#D39127',
    },
    '&.hard': {
      backgroundColor: '#DA4943',
    },
    '&.extreme': {
      backgroundColor: '#9C388B',
    },
  },
});
