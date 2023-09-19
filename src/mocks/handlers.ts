import { rest } from 'msw';

// mock data
const problemData = {
  warm: [
    {
      problemId: 13,
      problemTitle: 'Pick',
      problemDescription:
        'T에서 K 프로퍼티만 선택해 새로운 오브젝트 타입을 만드는 내장 제네릭 Pick<T, K>을 이를 사용하지 않고 구현하세요.',
      example: [
        'interface Todo {',
        '  title: string',
        '  description: string',
        '  completed: boolean',
        '}',
        "type TodoPreview = MyPick<Todo, 'title' | 'completed'>",
        'const todo: TodoPreview = {',
        "    title: 'Clean room',",
        '    completed: false,',
        '}',
      ],
      template: ['type MyPick<T, K> = any'],
      testCases: [
        "import type { Equal, Expect } from '@type-challenges/utils'",
        'type cases = [',
        "  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,",
        "  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,",
        '  // @ts-expect-error',
        "  MyPick<Todo, 'title' | 'completed' | 'invalid'>,",
        ']',
        'interface Todo {',
        '  title: string',
        '  description: string',
        '  completed: boolean',
        '}',
        'interface Expected1 {',
        '  title: string',
        '}',
        'interface Expected2 {',
        '  title: string',
        '  completed: boolean',
        '}',
      ],
      isSolved: false,
    },
  ],
  easy: [
    {
      problemId: 4,
      problemTitle: 'Pick',
      problemDescription:
        '배열(튜플) T를 받아 첫 원소의 타입을 반환하는 제네릭 First<T>를 구현하세요.',
      example: [
        "type arr1 = ['a', 'b', 'c']",
        'type arr2 = [3, 2, 1]',
        "type head1 = First<arr1> // expected to be 'a'",
        'type head2 = First<arr2> // expected to be 3',
      ],
      template: ['type First<T extends any[]> = any'],
      testCases: [
        "import type { Equal, Expect } from '@type-challenges/utils'",
        'type cases = [',
        '  Expect<Equal<First<[3, 2, 1]>, 3>>,',
        '  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,',
        '  Expect<Equal<First<[]>, never>>,',
        '  Expect<Equal<First<[undefined]>, undefined>>,',
        ']',
        'type errors = [',
        '  // @ts-expect-error',
        "  First<'notArray'>,",
        '  // @ts-expect-error',
        "  First<{ 0: 'arrayLike' }>,",
        ']',
      ],
      isSolved: true,
    },
    {
      problemId: 7,
      problemTitle: 'Readonly',
      problemDescription:
        '배열(튜플) T를 받아 첫 원소의 타입을 반환하는 제네릭 First<T>를 구현하세요.',
      example: [
        "type arr1 = ['a', 'b', 'c']",
        'type arr2 = [3, 2, 1]',
        "type head1 = First<arr1> // expected to be 'a'",
        'type head2 = First<arr2> // expected to be 3',
      ],
      template: ['type First<T extends any[]> = any'],
      testCases: [
        "import type { Equal, Expect } from '@type-challenges/utils'",
        'type cases = [',
        '  Expect<Equal<First<[3, 2, 1]>, 3>>,',
        '  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,',
        '  Expect<Equal<First<[]>, never>>,',
        '  Expect<Equal<First<[undefined]>, undefined>>,',
        ']',
        'type errors = [',
        '  // @ts-expect-error',
        "  First<'notArray'>,",
        '  // @ts-expect-error',
        "  First<{ 0: 'arrayLike' }>,",
        ']',
      ],
      isSolved: false,
    },
    {
      problemId: 8,
      problemTitle: 'Tuple to Object',
      problemDescription:
        '배열(튜플) T를 받아 첫 원소의 타입을 반환하는 제네릭 First<T>를 구현하세요.',
      example: [
        "type arr1 = ['a', 'b', 'c']",
        'type arr2 = [3, 2, 1]',
        "type head1 = First<arr1> // expected to be 'a'",
        'type head2 = First<arr2> // expected to be 3',
      ],
      template: ['type First<T extends any[]> = any'],
      testCases: [
        "import type { Equal, Expect } from '@type-challenges/utils'",
        'type cases = [',
        '  Expect<Equal<First<[3, 2, 1]>, 3>>,',
        '  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,',
        '  Expect<Equal<First<[]>, never>>,',
        '  Expect<Equal<First<[undefined]>, undefined>>,',
        ']',
        'type errors = [',
        '  // @ts-expect-error',
        "  First<'notArray'>,",
        '  // @ts-expect-error',
        "  First<{ 0: 'arrayLike' }>,",
        ']',
      ],
      isSolved: false,
    },
    {
      problemId: 9,
      problemTitle: 'First of Array',
      problemDescription:
        '배열(튜플) T를 받아 첫 원소의 타입을 반환하는 제네릭 First<T>를 구현하세요.',
      example: [
        "type arr1 = ['a', 'b', 'c']",
        'type arr2 = [3, 2, 1]',
        "type head1 = First<arr1> // expected to be 'a'",
        'type head2 = First<arr2> // expected to be 3',
      ],
      template: ['type First<T extends any[]> = any'],
      testCases: [
        "import type { Equal, Expect } from '@type-challenges/utils'",
        'type cases = [',
        '  Expect<Equal<First<[3, 2, 1]>, 3>>,',
        '  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,',
        '  Expect<Equal<First<[]>, never>>,',
        '  Expect<Equal<First<[undefined]>, undefined>>,',
        ']',
        'type errors = [',
        '  // @ts-expect-error',
        "  First<'notArray'>,",
        '  // @ts-expect-error',
        "  First<{ 0: 'arrayLike' }>,",
        ']',
      ],
      isSolved: false,
    },
    {
      problemId: 198,
      problemTitle: 'Includes',
      problemDescription:
        'JavaScript의 Array.includes 함수를 타입 시스템에서 구현하세요. 타입은 두 인수를 받고, true 또는 false를 반환해야 합니다.',
      example: [
        "type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`",
      ],
      template: ['type Includes<T extends readonly any[], U> = any'],
      testCases: [
        "import type { Equal, Expect } from '@type-challenges/utils'",
        'type cases = [',
        "  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,",
        "  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,",
        '  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,',
        '  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,',
        '  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,',
        '  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,',
        "  Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,",
        '  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,',
        '  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,',
        '  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,',
        "  Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,",
        "  Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,",
        '  Expect<Equal<Includes<[1], 1 | 2>, false>>,',
        '  Expect<Equal<Includes<[1 | 2], 1>, false>>,',
        '  Expect<Equal<Includes<[null], undefined>, false>>,',
        '  Expect<Equal<Includes<[undefined], null>, false>>,',
        ']',
      ],
    },
  ],
  medium: [
    {
      problemId: 134,
      problemTitle: 'Pick',
      problemDescription:
        '배열(튜플) T를 받아 첫 원소의 타입을 반환하는 제네릭 First<T>를 구현하세요.',
      example: [
        "type arr1 = ['a', 'b', 'c']",
        'type arr2 = [3, 2, 1]',
        "type head1 = First<arr1> // expected to be 'a'",
        'type head2 = First<arr2> // expected to be 3',
      ],
      template: ['type First<T extends any[]> = any'],
      testCases: [
        "import type { Equal, Expect } from '@type-challenges/utils'",
        'type cases = [',
        '  Expect<Equal<First<[3, 2, 1]>, 3>>,',
        '  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,',
        '  Expect<Equal<First<[]>, never>>,',
        '  Expect<Equal<First<[undefined]>, undefined>>,',
        ']',
        'type errors = [',
        '  // @ts-expect-error',
        "  First<'notArray'>,",
        '  // @ts-expect-error',
        "  First<{ 0: 'arrayLike' }>,",
        ']',
      ],
      isSolved: true,
    },
    {
      problemId: 94,
      problemTitle: 'Readonly',
      problemDescription:
        '배열(튜플) T를 받아 첫 원소의 타입을 반환하는 제네릭 First<T>를 구현하세요.',
      example: [
        "type arr1 = ['a', 'b', 'c']",
        'type arr2 = [3, 2, 1]',
        "type head1 = First<arr1> // expected to be 'a'",
        'type head2 = First<arr2> // expected to be 3',
      ],
      template: ['type First<T extends any[]> = any'],
      testCases: [
        "import type { Equal, Expect } from '@type-challenges/utils'",
        'type cases = [',
        '  Expect<Equal<First<[3, 2, 1]>, 3>>,',
        '  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,',
        '  Expect<Equal<First<[]>, never>>,',
        '  Expect<Equal<First<[undefined]>, undefined>>,',
        ']',
        'type errors = [',
        '  // @ts-expect-error',
        "  First<'notArray'>,",
        '  // @ts-expect-error',
        "  First<{ 0: 'arrayLike' }>,",
        ']',
      ],
      isSolved: false,
    },
    {
      problemId: 238,
      problemTitle: 'Tuple to Object',
      problemDescription:
        '배열(튜플) T를 받아 첫 원소의 타입을 반환하는 제네릭 First<T>를 구현하세요.',
      example: [
        "type arr1 = ['a', 'b', 'c']",
        'type arr2 = [3, 2, 1]',
        "type head1 = First<arr1> // expected to be 'a'",
        'type head2 = First<arr2> // expected to be 3',
      ],
      template: ['type First<T extends any[]> = any'],
      testCases: [
        "import type { Equal, Expect } from '@type-challenges/utils'",
        'type cases = [',
        '  Expect<Equal<First<[3, 2, 1]>, 3>>,',
        '  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,',
        '  Expect<Equal<First<[]>, never>>,',
        '  Expect<Equal<First<[undefined]>, undefined>>,',
        ']',
        'type errors = [',
        '  // @ts-expect-error',
        "  First<'notArray'>,",
        '  // @ts-expect-error',
        "  First<{ 0: 'arrayLike' }>,",
        ']',
      ],
      isSolved: false,
    },
    {
      problemId: 76,
      problemTitle: 'First of Array',
      problemDescription:
        '배열(튜플) T를 받아 첫 원소의 타입을 반환하는 제네릭 First<T>를 구현하세요.',
      example: [
        "type arr1 = ['a', 'b', 'c']",
        'type arr2 = [3, 2, 1]',
        "type head1 = First<arr1> // expected to be 'a'",
        'type head2 = First<arr2> // expected to be 3',
      ],
      template: ['type First<T extends any[]> = any'],
      testCases: [
        "import type { Equal, Expect } from '@type-challenges/utils'",
        'type cases = [',
        '  Expect<Equal<First<[3, 2, 1]>, 3>>,',
        '  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,',
        '  Expect<Equal<First<[]>, never>>,',
        '  Expect<Equal<First<[undefined]>, undefined>>,',
        ']',
        'type errors = [',
        '  // @ts-expect-error',
        "  First<'notArray'>,",
        '  // @ts-expect-error',
        "  First<{ 0: 'arrayLike' }>,",
        ']',
      ],
      isSolved: false,
    },
    {
      problemId: 898,
      problemTitle: 'Includes',
      problemDescription:
        'JavaScript의 Array.includes 함수를 타입 시스템에서 구현하세요. 타입은 두 인수를 받고, true 또는 false를 반환해야 합니다.',
      example: [
        "type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`",
      ],
      template: ['type Includes<T extends readonly any[], U> = any'],
      testCases: [
        "import type { Equal, Expect } from '@type-challenges/utils'",
        'type cases = [',
        "  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,",
        "  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,",
        '  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,',
        '  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,',
        '  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,',
        '  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,',
        "  Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,",
        '  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,',
        '  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,',
        '  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,',
        "  Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,",
        "  Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,",
        '  Expect<Equal<Includes<[1], 1 | 2>, false>>,',
        '  Expect<Equal<Includes<[1 | 2], 1>, false>>,',
        '  Expect<Equal<Includes<[null], undefined>, false>>,',
        '  Expect<Equal<Includes<[undefined], null>, false>>,',
        ']',
      ],
    },
  ],
  hard: [
    {
      problemId: 32,
      problemTitle: 'Pick',
      problemDescription:
        '배열(튜플) T를 받아 첫 원소의 타입을 반환하는 제네릭 First<T>를 구현하세요.',
      example: [
        "type arr1 = ['a', 'b', 'c']",
        'type arr2 = [3, 2, 1]',
        "type head1 = First<arr1> // expected to be 'a'",
        'type head2 = First<arr2> // expected to be 3',
      ],
      template: ['type First<T extends any[]> = any'],
      testCases: [
        "import type { Equal, Expect } from '@type-challenges/utils'",
        'type cases = [',
        '  Expect<Equal<First<[3, 2, 1]>, 3>>,',
        '  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,',
        '  Expect<Equal<First<[]>, never>>,',
        '  Expect<Equal<First<[undefined]>, undefined>>,',
        ']',
        'type errors = [',
        '  // @ts-expect-error',
        "  First<'notArray'>,",
        '  // @ts-expect-error',
        "  First<{ 0: 'arrayLike' }>,",
        ']',
      ],
      isSolved: true,
    },
    {
      problemId: 10,
      problemTitle: 'Readonly',
      problemDescription:
        '배열(튜플) T를 받아 첫 원소의 타입을 반환하는 제네릭 First<T>를 구현하세요.',
      example: [
        "type arr1 = ['a', 'b', 'c']",
        'type arr2 = [3, 2, 1]',
        "type head1 = First<arr1> // expected to be 'a'",
        'type head2 = First<arr2> // expected to be 3',
      ],
      template: ['type First<T extends any[]> = any'],
      testCases: [
        "import type { Equal, Expect } from '@type-challenges/utils'",
        'type cases = [',
        '  Expect<Equal<First<[3, 2, 1]>, 3>>,',
        '  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,',
        '  Expect<Equal<First<[]>, never>>,',
        '  Expect<Equal<First<[undefined]>, undefined>>,',
        ']',
        'type errors = [',
        '  // @ts-expect-error',
        "  First<'notArray'>,",
        '  // @ts-expect-error',
        "  First<{ 0: 'arrayLike' }>,",
        ']',
      ],
      isSolved: false,
    },
    {
      problemId: 52,
      problemTitle: 'Tuple to Object',
      problemDescription:
        '배열(튜플) T를 받아 첫 원소의 타입을 반환하는 제네릭 First<T>를 구현하세요.',
      example: [
        "type arr1 = ['a', 'b', 'c']",
        'type arr2 = [3, 2, 1]',
        "type head1 = First<arr1> // expected to be 'a'",
        'type head2 = First<arr2> // expected to be 3',
      ],
      template: ['type First<T extends any[]> = any'],
      testCases: [
        "import type { Equal, Expect } from '@type-challenges/utils'",
        'type cases = [',
        '  Expect<Equal<First<[3, 2, 1]>, 3>>,',
        '  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,',
        '  Expect<Equal<First<[]>, never>>,',
        '  Expect<Equal<First<[undefined]>, undefined>>,',
        ']',
        'type errors = [',
        '  // @ts-expect-error',
        "  First<'notArray'>,",
        '  // @ts-expect-error',
        "  First<{ 0: 'arrayLike' }>,",
        ']',
      ],
      isSolved: false,
    },
    {
      problemId: 79,
      problemTitle: 'First of Array',
      problemDescription:
        '배열(튜플) T를 받아 첫 원소의 타입을 반환하는 제네릭 First<T>를 구현하세요.',
      example: [
        "type arr1 = ['a', 'b', 'c']",
        'type arr2 = [3, 2, 1]',
        "type head1 = First<arr1> // expected to be 'a'",
        'type head2 = First<arr2> // expected to be 3',
      ],
      template: ['type First<T extends any[]> = any'],
      testCases: [
        "import type { Equal, Expect } from '@type-challenges/utils'",
        'type cases = [',
        '  Expect<Equal<First<[3, 2, 1]>, 3>>,',
        '  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,',
        '  Expect<Equal<First<[]>, never>>,',
        '  Expect<Equal<First<[undefined]>, undefined>>,',
        ']',
        'type errors = [',
        '  // @ts-expect-error',
        "  First<'notArray'>,",
        '  // @ts-expect-error',
        "  First<{ 0: 'arrayLike' }>,",
        ']',
      ],
      isSolved: false,
    },
    {
      problemId: 47,
      problemTitle: 'Includes',
      problemDescription:
        'JavaScript의 Array.includes 함수를 타입 시스템에서 구현하세요. 타입은 두 인수를 받고, true 또는 false를 반환해야 합니다.',
      example: [
        "type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`",
      ],
      template: ['type Includes<T extends readonly any[], U> = any'],
      testCases: [
        "import type { Equal, Expect } from '@type-challenges/utils'",
        'type cases = [',
        "  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,",
        "  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,",
        '  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,',
        '  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,',
        '  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,',
        '  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,',
        "  Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,",
        '  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,',
        '  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,',
        '  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,',
        "  Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,",
        "  Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,",
        '  Expect<Equal<Includes<[1], 1 | 2>, false>>,',
        '  Expect<Equal<Includes<[1 | 2], 1>, false>>,',
        '  Expect<Equal<Includes<[null], undefined>, false>>,',
        '  Expect<Equal<Includes<[undefined], null>, false>>,',
        ']',
      ],
    },
  ],
  extreme: [
    {
      problemId: 4,
      problemTitle: 'Pick',
      problemDescription:
        '배열(튜플) T를 받아 첫 원소의 타입을 반환하는 제네릭 First<T>를 구현하세요.',
      example: [
        "type arr1 = ['a', 'b', 'c']",
        'type arr2 = [3, 2, 1]',
        "type head1 = First<arr1> // expected to be 'a'",
        'type head2 = First<arr2> // expected to be 3',
      ],
      template: ['type First<T extends any[]> = any'],
      testCases: [
        "import type { Equal, Expect } from '@type-challenges/utils'",
        'type cases = [',
        '  Expect<Equal<First<[3, 2, 1]>, 3>>,',
        '  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,',
        '  Expect<Equal<First<[]>, never>>,',
        '  Expect<Equal<First<[undefined]>, undefined>>,',
        ']',
        'type errors = [',
        '  // @ts-expect-error',
        "  First<'notArray'>,",
        '  // @ts-expect-error',
        "  First<{ 0: 'arrayLike' }>,",
        ']',
      ],
      isSolved: true,
    },
    {
      problemId: 71,
      problemTitle: 'Readonly',
      problemDescription:
        '배열(튜플) T를 받아 첫 원소의 타입을 반환하는 제네릭 First<T>를 구현하세요.',
      example: [
        "type arr1 = ['a', 'b', 'c']",
        'type arr2 = [3, 2, 1]',
        "type head1 = First<arr1> // expected to be 'a'",
        'type head2 = First<arr2> // expected to be 3',
      ],
      template: ['type First<T extends any[]> = any'],
      testCases: [
        "import type { Equal, Expect } from '@type-challenges/utils'",
        'type cases = [',
        '  Expect<Equal<First<[3, 2, 1]>, 3>>,',
        '  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,',
        '  Expect<Equal<First<[]>, never>>,',
        '  Expect<Equal<First<[undefined]>, undefined>>,',
        ']',
        'type errors = [',
        '  // @ts-expect-error',
        "  First<'notArray'>,",
        '  // @ts-expect-error',
        "  First<{ 0: 'arrayLike' }>,",
        ']',
      ],
      isSolved: false,
    },
    {
      problemId: 61,
      problemTitle: 'Tuple to Object',
      problemDescription:
        '배열(튜플) T를 받아 첫 원소의 타입을 반환하는 제네릭 First<T>를 구현하세요.',
      example: [
        "type arr1 = ['a', 'b', 'c']",
        'type arr2 = [3, 2, 1]',
        "type head1 = First<arr1> // expected to be 'a'",
        'type head2 = First<arr2> // expected to be 3',
      ],
      template: ['type First<T extends any[]> = any'],
      testCases: [
        "import type { Equal, Expect } from '@type-challenges/utils'",
        'type cases = [',
        '  Expect<Equal<First<[3, 2, 1]>, 3>>,',
        '  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,',
        '  Expect<Equal<First<[]>, never>>,',
        '  Expect<Equal<First<[undefined]>, undefined>>,',
        ']',
        'type errors = [',
        '  // @ts-expect-error',
        "  First<'notArray'>,",
        '  // @ts-expect-error',
        "  First<{ 0: 'arrayLike' }>,",
        ']',
      ],
      isSolved: false,
    },
    {
      problemId: 29,
      problemTitle: 'First of Array',
      problemDescription:
        '배열(튜플) T를 받아 첫 원소의 타입을 반환하는 제네릭 First<T>를 구현하세요.',
      example: [
        "type arr1 = ['a', 'b', 'c']",
        'type arr2 = [3, 2, 1]',
        "type head1 = First<arr1> // expected to be 'a'",
        'type head2 = First<arr2> // expected to be 3',
      ],
      template: ['type First<T extends any[]> = any'],
      testCases: [
        "import type { Equal, Expect } from '@type-challenges/utils'",
        'type cases = [',
        '  Expect<Equal<First<[3, 2, 1]>, 3>>,',
        '  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,',
        '  Expect<Equal<First<[]>, never>>,',
        '  Expect<Equal<First<[undefined]>, undefined>>,',
        ']',
        'type errors = [',
        '  // @ts-expect-error',
        "  First<'notArray'>,",
        '  // @ts-expect-error',
        "  First<{ 0: 'arrayLike' }>,",
        ']',
      ],
      isSolved: false,
    },
    {
      problemId: 33,
      problemTitle: 'Includes',
      problemDescription:
        'JavaScript의 Array.includes 함수를 타입 시스템에서 구현하세요. 타입은 두 인수를 받고, true 또는 false를 반환해야 합니다.',
      example: [
        "type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`",
      ],
      template: ['type Includes<T extends readonly any[], U> = any'],
      testCases: [
        "import type { Equal, Expect } from '@type-challenges/utils'",
        'type cases = [',
        "  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,",
        "  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,",
        '  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,',
        '  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,',
        '  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,',
        '  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,',
        "  Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,",
        '  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,',
        '  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,',
        '  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,',
        "  Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,",
        "  Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,",
        '  Expect<Equal<Includes<[1], 1 | 2>, false>>,',
        '  Expect<Equal<Includes<[1 | 2], 1>, false>>,',
        '  Expect<Equal<Includes<[null], undefined>, false>>,',
        '  Expect<Equal<Includes<[undefined], null>, false>>,',
        ']',
      ],
    },
  ],
};

const submitData = [];

// API
export const handlers = [
  rest.get('/problems', async (req, res, ctx) => {
    return await res(ctx.status(200), ctx.json(problemData));
  }),
  rest.post('/submit', async (req, res, ctx) => {
    submitData.push(req.body);
    return await res(ctx.status(201));
  }),
];
