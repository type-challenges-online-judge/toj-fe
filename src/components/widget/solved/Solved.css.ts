import { style } from '@vanilla-extract/css';

export const SolvedBadgeStyle = style({
  margin: '0 auto',
  width: '600px',
  padding: '50px 0',
  backgroundColor: '#F7F8F9',
  borderRadius: '20px',
});

export const SolvedButtonStyle = style({
  display: 'flex',
  listStyle: 'none',
  flexWrap: 'wrap',
});

export const SingleBadgeStyle = style({
  // boxSizing: 'border-box',
  flex: '0 0 calc(100% / 7)',
});
