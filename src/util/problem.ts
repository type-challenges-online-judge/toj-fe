import { ProblemDetailType } from '@/type/problem';

// "problem/", "submit/"" URL 판별
export const checkURL = (pathname: string) => {
  const pattern = /^\/(problem|submit)\/\d+/;
  return pattern.test(pathname);
};

// data.description의 README에서 문제 설명 부분 추출
export const extractDescription = (mdString: string) => {
  const startIdx = mdString.indexOf('<!--info-header-end-->');
  if (startIdx === -1) return '';

  const leftString = mdString.slice(startIdx + '<!--info-header-end-->'.length);
  const tsIdx = leftString.search(/(```|~~~)(ts|typescript)/);
  if (tsIdx !== -1) {
    let extractedString = leftString.slice(0, tsIdx).trim();
    const pattern =
      /(예시\s?:?|For example\s?:?|for example\s?:?|### for example|A few examples\s?:?|a few examples\s?:?)\s*$/i;
    extractedString = extractedString.replace(pattern, '').trim();

    return extractedString;
  }
  const footerStartIdx = leftString.indexOf('<!--info-footer-start-->');
  if (footerStartIdx !== -1) {
    return leftString.slice(0, footerStartIdx).trim();
  }

  return leftString.trim();
};

// data.description의 README에서 문제 예시 추출
export const extractExample = (readmeString: string) => {
  const startIndex = readmeString.indexOf('<!--info-header-end-->');
  const leftString = readmeString.slice(startIndex + '<!--info-header-end-->'.length);

  // ```ts 또는 ~~~ts로 시작하고 ``` 또는 ~~~로 끝나는 패턴을 찾는 정규식
  const target = leftString.match(/(~~~|```) ?(ts|typescript)([\s\S]*?)\1/);

  const exampleCode = target !== null ? target[3].trim() : '';
  return exampleCode;
};

// 테스트케이스 문자열 반환
export const extractTestCases = (arr: ProblemDetailType['data']['testCase']) => {
  return arr.map((i) => i.case).join('\n\n');
};
