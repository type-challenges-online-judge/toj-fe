import { Level } from '../type/problem';

interface Problem {
  problemId: number;
  problemLevel: Level;
  problemTitle: string;
}

export const warmUpProblems: Problem[] = [
  {
    problemId: 13,
    problemLevel: 'warm-up',
    problemTitle: 'Pick',
  },
];

export const easyProblems: Problem[] = [
  {
    problemId: 4,
    problemLevel: 'easy',
    problemTitle: 'Pick',
  },
  {
    problemId: 7,
    problemLevel: 'easy',
    problemTitle: 'Readonly',
  },
  {
    problemId: 11,
    problemLevel: 'easy',
    problemTitle: 'Tuple to Object',
  },
  {
    problemId: 14,
    problemLevel: 'easy',
    problemTitle: 'First of Array',
  },
  {
    problemId: 18,
    problemLevel: 'easy',
    problemTitle: 'Length of Tuple',
  },
  {
    problemId: 43,
    problemLevel: 'easy',
    problemTitle: 'Exclude',
  },
  {
    problemId: 189,
    problemLevel: 'easy',
    problemTitle: 'Awaited',
  },
  {
    problemId: 268,
    problemLevel: 'easy',
    problemTitle: 'If',
  },
  {
    problemId: 533,
    problemLevel: 'easy',
    problemTitle: 'Concat',
  },
  {
    problemId: 898,
    problemLevel: 'easy',
    problemTitle: 'Includes',
  },
  {
    problemId: 3057,
    problemLevel: 'easy',
    problemTitle: 'Push',
  },
  {
    problemId: 3060,
    problemLevel: 'easy',
    problemTitle: 'Unshift',
  },
  {
    problemId: 3312,
    problemLevel: 'easy',
    problemTitle: 'Parameters',
  },
];

export const mediumProblems: Problem[] = [
  {
    problemId: 2,
    problemLevel: 'medium',
    problemTitle: 'Get Return Type',
  },
  {
    problemId: 3,
    problemLevel: 'medium',
    problemTitle: 'Omit',
  },
  {
    problemId: 8,
    problemLevel: 'medium',
    problemTitle: 'Readonly 2',
  },
  {
    problemId: 9,
    problemLevel: 'medium',
    problemTitle: 'Deep Readonly',
  },
  {
    problemId: 10,
    problemLevel: 'medium',
    problemTitle: 'Tuple to Union',
  },
  {
    problemId: 12,
    problemLevel: 'medium',
    problemTitle: 'Chainable Options',
  },
  {
    problemId: 15,
    problemLevel: 'medium',
    problemTitle: 'Last of Array',
  },
  {
    problemId: 16,
    problemLevel: 'medium',
    problemTitle: 'Pop',
  },
  {
    problemId: 20,
    problemLevel: 'medium',
    problemTitle: 'Promise.all',
  },
  {
    problemId: 62,
    problemLevel: 'medium',
    problemTitle: 'Type Lookup',
  },
  {
    problemId: 106,
    problemLevel: 'medium',
    problemTitle: 'Trim Left',
  },
  {
    problemId: 108,
    problemLevel: 'medium',
    problemTitle: 'Trim',
  },
];

export const hardProblems: Problem[] = [
  {
    problemId: 6,
    problemLevel: 'hard',
    problemTitle: 'Simple Vue',
  },
  {
    problemId: 17,
    problemLevel: 'hard',
    problemTitle: 'Currying',
  },
  {
    problemId: 55,
    problemLevel: 'hard',
    problemTitle: 'Union to Intersection',
  },
  {
    problemId: 57,
    problemLevel: 'hard',
    problemTitle: 'Get Required',
  },
  {
    problemId: 59,
    problemLevel: 'hard',
    problemTitle: 'Get Optional',
  },
];

export const extremeProblems: Problem[] = [
  {
    problemId: 5,
    problemLevel: 'extreme',
    problemTitle: 'Get Readonly Keys',
  },
  {
    problemId: 151,
    problemLevel: 'extreme',
    problemTitle: 'Query String Parser',
  },
  {
    problemId: 216,
    problemLevel: 'extreme',
    problemTitle: 'Slice',
  },
  {
    problemId: 274,
    problemLevel: 'extreme',
    problemTitle: 'Integers Comparator',
  },
  {
    problemId: 462,
    problemLevel: 'extreme',
    problemTitle: 'Currying 2',
  },
];
