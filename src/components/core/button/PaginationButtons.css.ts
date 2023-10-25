import { style } from '@vanilla-extract/css';

export const PaginationButtonsWrapperStyle = style({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '50px',
});
export const ButtonsStyle = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.1rem',
  padding: '2px 15px',
  margin: '15px',
  border: 'none',
  borderRadius: '20px',
  backgroundColor: 'transparent',
  ':hover': {
    color: 'white',
    backgroundColor: '#3B8DC9',
  },
  selectors: {
    '&.current': {
      backgroundColor: '#3B8DC9',
      color: 'white',
    },
    '&:disabled:hover': {
      backgroundColor: 'transparent',
      color: '#888',
    },
  },
  transition: 'background-color 0.3s ease, transform 0.3s ease',
});
