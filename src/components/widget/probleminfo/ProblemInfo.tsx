import React from 'react';
import { useParams } from 'react-router-dom';
import { ExampleAndTemplatesStyle, ProblemInfoWrapper } from './ProblemInfo.css';

// components
import { BasicButton } from '@/components/core';
import { Title } from './title';
import { ProblemDetails } from './problemdetails';
import { ProblemDescription } from './problemdescription';
import { TestCases } from './testcases';

// utils
import { extractDescription, extractExample, extractTSOnlineLink } from '@/util/problem';

// hooks
import { useGetProblemDetail } from '@/hooks/queries/problem';

// types
import { GetProblemDetailType } from '@/type/problem';

const ProblemInfo = () => {
  const { problemId } = useParams();

  // 캐싱 데이터 사용 (없을 경우 queryFn 적용)
  const { data: { data: problemDetailData = null } = {} } =
    useGetProblemDetail<GetProblemDetailType>(Number(problemId));

  const [description, example, TSOnlineLink, teaplate] = [
    problemDetailData !== null ? extractDescription(problemDetailData.description) : '',
    problemDetailData !== null ? extractExample(problemDetailData.description) : '',
    problemDetailData !== null ? extractTSOnlineLink(problemDetailData.description) : '',
    problemDetailData !== null ? problemDetailData.template : '',
  ];

  return (
    <>
      {problemDetailData !== null && (
        <div className={ProblemInfoWrapper}>
          <Title problemDetail={problemDetailData} />

          <BasicButton
            text="TS 온라인에서 풀이"
            _onClick={() => (window.location.href = TSOnlineLink)}
          />

          <ProblemDescription description={description} />

          <div className={ExampleAndTemplatesStyle}>
            {example.length !== 0 && <ProblemDetails text="예시" codeBlock={example} />}

            <ProblemDetails text="제출 템플릿" codeBlock={teaplate} />
          </div>

          <TestCases text="테스트 케이스" testCases={problemDetailData.testCase}></TestCases>
        </div>
      )}
    </>
  );
};

export default ProblemInfo;
