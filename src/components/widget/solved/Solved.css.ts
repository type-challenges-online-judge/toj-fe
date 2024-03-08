import { style } from '@vanilla-extract/css';

export const SolvedBadgeStyle = style({
  width: '700px',
  padding: '50px 0',
  backgroundColor: '#F7F8F9',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
});

export const SolvedButtonStyle = style({
  display: 'flex',
  listStyle: 'none',
  flexWrap: 'wrap',
  paddingLeft: '0',
});

export const SolvedCountDescStyle = style({
  paddingLeft: '30px',
  color: '#343541',
  fontWeight: 'bolder',
});

export const SingleBadgeStyle = style({
  // boxSizing: 'border-box',
  // flex: '0 0 calc(100% / 7 - 50px)',
  // margin: '0px 25px',

  // li안에 뱃지버튼 위치 중앙 정렬
  display: 'flex',
  justifyContent: 'center',

  // li 너비 일괄 적용 (10개씩 보여주기)
  flex: '0 0 calc(100% / 10)',
});
