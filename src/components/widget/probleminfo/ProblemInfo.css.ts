import { style } from '@vanilla-extract/css';

export const ProblemInfoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '50px',
});

export const ProblemTitleStyle = style({
  fontSize: '2.8rem',
});

const ProblemDiffFont = style({
  fontSize: '1.5rem',
  marginLeft: '30px',
});
export const ProblemDiffStyle = {
  warm: style([ProblemDiffFont, { color: '#0F8383' }]),
  easy: style([ProblemDiffFont, { color: '#7BA918' }]),
  medium: style([ProblemDiffFont, { color: '#D49228' }]),
  hard: style([ProblemDiffFont, { color: '#D74640' }]),
  extreme: style([ProblemDiffFont, { color: '#AC258C' }]),
};

export const ExampleAndTemplatesStyle = style({
  display: 'flex',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
});

// ProblemDetails
export const ProblemDetailsWrapperStyle = style({
  marginRight: '200px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const ProblemCategoryStyle = style({
  fontSize: '1.2rem',
});

export const ProblemCodeBlockStyle = style({
  background: '#F5F5F5',
  padding: '30px 30px',
  borderRadius: '10px',
});

export const ProblemCodeStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.0rem',
});
