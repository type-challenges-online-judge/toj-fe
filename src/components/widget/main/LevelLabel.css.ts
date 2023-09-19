import { style } from '@vanilla-extract/css';

export const LevelLabelWrapperStyle = style({
  display: 'flex',
  width: 'fit-content',
  borderRadius: '5px',
  overflow: 'hidden',
});

export const LevelStyle = style({
  width: 'fit-content',
  padding: '4px 8px',
  backgroundColor: '#5D5D5D',
});

export const CountStyle = style({
  width: 'fit-content',
  padding: '4px 8px',

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

export const LevelLabelTextStyle = style({
  margin: '0',
  fontSize: '15px',
  color: 'white',
});
