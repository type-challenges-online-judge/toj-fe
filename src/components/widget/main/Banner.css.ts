import { style } from '@vanilla-extract/css';

export const BannerStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  padding: '100px 0',
  backgroundColor: 'black',
  color: 'white',
});

export const BannerTitleStyle = style({
  fontSize: '36px',
});

export const BannerHrStyle = style({
  width: '72px',
  height: '4px',
  margin: '10px 0',
  backgroundColor: 'white',
});

export const BannerInfoStyle = style({
  fontSize: '17px',
});
