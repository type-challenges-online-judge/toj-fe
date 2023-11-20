import { style } from '@vanilla-extract/css';

export const UserProfileWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin: '50px 0px 50px 0px',
});
export const UserImgAndBadgeStyle = style({
  width: '160px',
  position: 'relative',
});

export const UserNameStyle = style({
  fontWeight: 'bolder',
  fontSize: '1.6rem',
  marginTop: '40px',
});
export const ProfileImgStyle = style({
  width: 'inherit',
  borderRadius: '50px',
});

export const ProfileBadgeStyle = style({
  zIndex: '100',
  position: 'absolute',
  top: '85%',
  left: '50%',
  transform: 'translateX(-50%)',
});
