import { style } from '@vanilla-extract/css';

export const PaginationButtonsWrapperStyle = style({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '50px',
});
export const ButtonsStyle = style({
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
  transition: 'background-color 0.3s ease, transform 0.3s ease',
});
