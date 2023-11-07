import { style } from '@vanilla-extract/css';

export const ProblemDiffStyle = {
  warm: style({ fill: '#0F8383' }),
  easy: style({ fill: '#7BA918' }),
  medium: style({ fill: '#D49228' }),
  hard: style({ fill: '#D74640' }),
  extreme: style({ fill: '#AC258C' }),
};

export const BadgeStyle = style({
  width: '25px',
});
