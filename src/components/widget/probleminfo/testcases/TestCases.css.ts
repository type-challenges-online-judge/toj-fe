import { style } from '@vanilla-extract/css';

export const TestCasesWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
});

export const TestCaseCount = style({
  paddingBottom: '5px',
  borderBottom: '2px solid #F5F5F5',
});

export const TestCaseCountFont = style({
  fontSize: '1.1rem',
  color: '#9CA3AF',
  paddingBottom: '5px',
  borderBottom: '2px solid #0090F9',
});

export const TestCaseTotalCount = style({
  fontSize: '1.3rem',
  fontWeight: 'bolder',
  color: '#3178C6',
});
