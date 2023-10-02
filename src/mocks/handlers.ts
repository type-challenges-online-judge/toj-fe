import { rest } from 'msw';

const submitLogData = [
  {
    userId: 456,
    problemId: 173,
    submitNumber: 23,
    accuracyScore: 100,
    validate: 100,
    codeLength: 324, // Byte
    submitDate: '2023-09-13T14:12:57',
    code: 'type First<T extends any[]> = T extends [] ? never : T[0]',
  },
  {
    userId: 123,
    problemId: 173,
    submitNumber: 2,
    accuracyScore: 100,
    validate: 100,
    codeLength: 324, // Byte
    submitDate: '2023-09-13T14:12:57',
    code: 'type First<T extends any[]> = T extends [] ? never : T[0]',
  },
  {
    userId: 123,
    problemId: 173,
    submitNumber: 3,
    accuracyScore: 0,
    validate: 0,
    codeLength: 754, // Byte
    submitDate: '2023-09-13T14:12:57',
    code: 'type First<T extends any[]> = T extends [] ? never : T[0]',
  },
  {
    userId: 123,
    problemId: 173,
    submitNumber: 28,
    accuracyScore: 88,
    validate: 80,
    codeLength: 241, // Byte
    submitDate: '2023-09-13T14:12:57',
    code: 'type First<T extends any[]> = T extends [] ? never : T[0]',
  },
  {
    userId: 123,
    problemId: 174,
    submitNumber: 2,
    accuracyScore: 100,
    validate: 100,
    codeLength: 324, // Byte
    submitDate: '2023-09-13T14:12:57',
    code: 'type First<T extends any[]> = T extends [] ? never : T[0]',
  },
  {
    userId: 123,
    problemId: 174,
    submitNumber: 52,
    accuracyScore: 100,
    validate: 100,
    codeLength: 431, // Byte
    submitDate: '2023-09-13T14:12:57',
    code: 'type First<T extends any[]> = T extends [] ? never : T[0]',
  },

  {
    userId: 123,
    problemId: 176,
    submitNumber: 2,
    accuracyScore: 100,
    validate: 100,
    codeLength: 324, // Byte
    submitDate: '2023-09-13T14:12:57',
    code: 'type First<T extends any[]> = T extends [] ? never : T[0]',
  },
  {
    userId: 123,
    problemId: 176,
    submitNumber: 598,
    accuracyScore: 100,
    validate: 75,
    codeLength: 164, // Byte
    submitDate: '2023-09-13T14:12:57',
    code: 'type First<T extends any[]> = T extends [] ? never : T[0]',
  },
  {
    userId: 123,
    problemId: 176,
    submitNumber: 75,
    accuracyScore: 100,
    validate: 100,
    codeLength: 572, // Byte
    submitDate: '2023-09-13T14:12:57',
    code: 'type First<T extends any[]> = T extends [] ? never : T[0]',
  },
  {
    userId: 456,
    problemId: 176,
    submitNumber: 215,
    accuracyScore: 100,
    validate: 100,
    codeLength: 572, // Byte
    submitDate: '2023-09-13T14:12:57',
    code: 'type First<T extends any[]> = T extends [] ? never : T[0]',
  },
  {
    userId: 123,
    problemId: 261,
    submitNumber: 2,
    accuracyScore: 100,
    validate: 100,
    codeLength: 324, // Byte
    submitDate: '2023-09-13T14:12:57',
    code: 'type First<T extends any[]> = T extends [] ? never : T[0]',
  },
  {
    userId: 123,
    problemId: 261,
    submitNumber: 913,
    accuracyScore: 50,
    validate: 50,
    codeLength: 29, // Byte
    submitDate: '2023-09-13T14:12:57',
    code: 'type First<T extends any[]> = T extends [] ? never : T[0]',
  },
  {
    userId: 123,
    problemId: 207,
    submitNumber: 2,
    accuracyScore: 100,
    validate: 100,
    codeLength: 324, // Byte
    submitDate: '2023-09-13T14:12:57',
    code: 'type First<T extends any[]> = T extends [] ? never : T[0]',
  },
  {
    userId: 123,
    problemId: 207,
    submitNumber: 9,
    accuracyScore: 33,
    validate: 10,
    codeLength: 64, // Byte
    submitDate: '2023-09-13T14:12:57',
    code: 'type First<T extends any[]> = T extends [] ? never : T[0]',
  },
  {
    userId: 123,
    problemId: 207,
    submitNumber: 9,
    accuracyScore: 100,
    validate: 100,
    codeLength: 64, // Byte
    submitDate: '2023-09-13T14:12:57',
    code: 'type First<T extends any[]> = T extends [] ? never : T[0]',
  },
  {
    userId: 123,
    problemId: 224,
    submitNumber: 2,
    accuracyScore: 40,
    validate: 0,
    codeLength: 324, // Byte
    submitDate: '2023-09-13T14:12:57',
    code: 'type First<T extends any[]> = T extends [] ? never : T[0]',
  },
  {
    userId: 456,
    problemId: 224,
    submitNumber: 64,
    accuracyScore: 100,
    validate: 100,
    codeLength: 324, // Byte
    submitDate: '2023-09-13T14:12:57',
    code: 'type First<T extends any[]> = T extends [] ? never : T[0]',
  },
];

// API
export const handlers = [
  /**
   * 전체 제출 기록 중에서 , 카테고리별로 선택한  문제들을 반환 합니다.
   *
   * 정답 : 정확성 === 100 && 유효성 ===100
   * 오답 : 정확성 !== 100 || 유효성 !== 100
   * 정확성 : 정확성 === 100 && 유효성 !==100
   *
   * https://localhost:3000/status?result_id=1&problem_id=172&snsId=123&mine=true
   * @route GET /status
   * @param {string} query.result_id -  1:정답 , 2:오답 , 3:정확성 , -1:전부
   * @param {number} query.problem_id - 문제의 ID를 나타냅니다.
   * @param {string} query.snsId - GITHUB의 유저ID값을 의미합니다
   * @param {boolean} query.mine - true:내 제출 , false:전체 제출
   * @returns {Object} Response object
   */
  rest.get('/status', async (req, res, ctx) => {
    const location = req.url.searchParams;

    const [resultId, problemId, snsId, mine] = [
      Number(location.get('resultId')),
      Number(location.get('problemId')),
      Number(location.get('snsId')),
      location.get('mine') === 'true',
    ];

    let data = submitLogData.filter((i) => i.problemId === problemId);

    if (mine) data = data.filter((i) => i.userId === snsId);

    if (resultId === 1) data = data?.filter((i) => i.accuracyScore === 100 && i.validate === 100);
    if (resultId === 2) data = data?.filter((i) => i.accuracyScore !== 100 || i.validate !== 100);
    if (resultId === 3) data = data?.filter((i) => i.accuracyScore === 100 && i.validate !== 100);

    return await res(ctx.status(200), ctx.json(data));
  }),
];
