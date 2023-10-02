import React, { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/theme-tomorrow';

import { submitAnswer } from '@/apis/problem';
import { BasicButton } from '@/components';

import { CodeInput, CodeInputWrapper } from './Submit.css';
import { SubmitType } from '@/type/status';
import { useGetProblemDetail } from '@/hooks/queries/problem';
import { ProblemDetailType } from '@/type/problem';

const Submit = () => {
  const [code, setCode] = useState<string>('');
  const [isStart, setIsStart] = useState(true);
  const { problemId } = useParams();

  const navigate = useNavigate();

  // 캐싱 데이터 사용 (없을 경우 queryFn 적용)
  const { data: { data: problemDetailData = null } = {} } = useGetProblemDetail<ProblemDetailType>(
    Number(problemId),
  );

  const { mutate: submitAnswerMutation } = useMutation(
    async (submitData: SubmitType) => await submitAnswer(submitData),
    {
      onSuccess() {},
      onError: (err) => {
        console.error(err);
      },
    },
  );

  const submitAnswerOnClick = () => {
    if (problemId !== undefined) {
      submitAnswerMutation(
        {
          userId: '123',
          problemId: Number(problemId),
          submitNumber: Math.floor(Math.random() * 1000) + 1,
          accuracyScore: Math.floor(Math.random() * 101),
          validate: Math.floor(Math.random() * 1001),
          codeLength: Math.floor(Math.random() * 1000),
          sumbitDate: '2023-09-13T14:12:57',
          code,
        },
        {
          onSuccess: async () => {
            navigate(`/status?resultId=-1&problemId=${problemId}&snsId=123&mine=true`);
          },
        },
      );
    }
  };

  useEffect(() => {
    const getFirstValue = () => {
      if (isStart && problemDetailData !== null) {
        const templateStr = problemDetailData.template;
        setIsStart(false);
        setCode(templateStr);
      }
    };
    getFirstValue();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [problemDetailData]);

  return (
    <div>
      <div className={CodeInputWrapper}>
        <AceEditor
          className={CodeInput}
          placeholder="code input"
          mode="typescript"
          theme="tomorrow"
          onChange={(value) => {
            setCode(value);
          }}
          name="typescript-editor"
          fontSize={16}
          value={code}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          tabSize={2}
          editorProps={{ $blockScrolling: true }}
          width="100%"
        />

        <BasicButton text="제출하기" _onClick={submitAnswerOnClick} />
      </div>
    </div>
  );
};

export default Submit;
