import { style } from '@vanilla-extract/css';

export const MainProblemsWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  margin: '60px 0',
});

export const MainLevelProblemsWrapperStyle = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '4px',
});

export const MainLevelsWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});
