import { style } from '@vanilla-extract/css';

export const BadgeButtonStyle = style({
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  position: 'relative',
});
export const BadgeDiscriptionVisibleStyle = style({
  position: 'absolute',
  top: '100%',
  left: '50%',
  zIndex: '100',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'end',
  gap: '10px',
  width: '100px',
  padding: '0 10px',
  backgroundColor: 'black',
  color: 'white',
  borderRadius: '10px',
  transform: 'translateX(-50%)',
  // transition: 'background-color 0.3s ease, transform 0.3s ease',
});

export const BadgeDiscriptionStyle = style({
  display: 'none',
});

export const DiscriptionStyle = style({});
