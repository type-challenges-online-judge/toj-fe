import { style } from '@vanilla-extract/css';

export const ProblemButtonStyle = style({
  padding: '4px 8px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',

  selectors: {
    '&.warm-up': {
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

export const ProblemButtonTextStyle = style({
  margin: '0',
  fontSize: '15px',
  color: 'white',
});
