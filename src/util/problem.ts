import { ProblemDetailType } from '@/type/problem';

// "problem/", "submit/"" URL 판별
export const checkURL = (pathname: string) => {
  const pattern = /^\/(problem|submit)\/\d+/;
  return pattern.test(pathname);
};

// data.description의 README에서 문제 설명 부분 추출
export const extractDescription = (readmeString: string) => {
  const startIndex = readmeString.indexOf('<!--info-header-end-->');
  const leftString = readmeString.slice(startIndex + '<!--info-header-end-->'.length);
  const target = leftString.match(/(.+?)\n\n/);
  const description = target !== null ? target[1].trim() : '';
  return description;
};

// data.description의 README에서 문제 예시 추출
export const extractExample = (readmeString: string) => {
  const startIndex = readmeString.indexOf('<!--info-header-end-->');
  const leftString = readmeString.slice(startIndex + '<!--info-header-end-->'.length);
  const target = leftString.match(/```ts([\s\S]*?)```/);
  const exampleCode = target !== null ? target[1].trim() : '';
  return exampleCode;
};

// 테스트케이스 문자열 반환
export const extractTestCases = (arr: ProblemDetailType['data']['testCase']) => {
  return arr.map((i) => i.case).join('\n\n');
};
