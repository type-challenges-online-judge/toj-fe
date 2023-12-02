import { GetProblemDetailType } from '@/type/problem';

// "problem/", "submit/"" URL 판별
export const checkWriteLocalStorageURL = (pathname: string) => {
  const pattern = /^\/(problem|submit)\/\d+/;
  return pattern.test(pathname);
};

// 메인 페이지,로그인,내정보 페이지 URL 판별
export const checkRemoveLocalStorageURL = (pathname: string) => {
  const pattern = /^\/$|^\/login$|^\/user(\?sns_id=\d+)?$/;
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

  const target = leftString.match(/(~~~|```) ?(ts|typescript)([\s\S]*?)\1/);

  const exampleCode = target !== null ? target[3].trim() : '';
  return exampleCode;
};

// data.description의 README에서 TSOnline 링크 추출
export const extractTSOnlineLink = (mdString: string) => {
  const headerContent = mdString.match(
    /<!--info-header-start-->([\s\S]+?)<!--info-header-end-->/,
  )?.[1];

  if (headerContent != null) {
    const url = headerContent.match(
      /<a href="(https:\/\/tsch\.js\.org\/\d+\/play(?:\/\w+)?)" target="_blank">/,
    )?.[1];

    if (url != null) {
      return url;
    }
  }

  return 'https://www.typescriptlang.org/play';
};

// 테스트케이스 문자열 반환
export const extractTestCases = (arr: GetProblemDetailType['data']['testCase']) => {
  return arr.map((i) => i.case).join('\n\n');
};
