import React, { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/theme-tomorrow';

import { problemApi } from '@/apis/problem';
import { BasicButton } from '@/components';

import { CodeInput, CodeInputWrapper } from './Submit.css';
import { useGetProblemDetail } from '@/hooks/queries/problem';
import { ProblemDetailType } from '@/type/problem';
import { useUserInfo } from '@/stores/useUserInfoStore';

const Submit = () => {
  const [code, setCode] = useState<string>('');
  const [isStart, setIsStart] = useState(true);
  const { problemId } = useParams();
  const navigate = useNavigate();
  const useInfo = useUserInfo();

  // 캐싱 데이터 사용 (없을 경우 queryFn 적용)
  const { data: { data: problemDetailData = null } = {} } = useGetProblemDetail<ProblemDetailType>(
    Number(problemId),
  );

  const { mutate: submitAnswerMutation } = useMutation(
    ['submit', problemId],
    async () => {
      return await problemApi.postSumbitCode(problemId as string, code);
    },
    {
      onSuccess: (data) => {
        navigate(`/status?result_id=-1&problem_id=${problemId}&snsId=${useInfo.snsId}`);
      },
      onError: (err) => {
        console.error(err);
      },
    },
  );
  const submitAnswerOnClick = async () => {
    if (problemId !== undefined) submitAnswerMutation();
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
