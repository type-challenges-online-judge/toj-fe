import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CodeInput, CodeInputWrapper } from './ProblemSubmit.css';

// hooks
import { useGetProblemDetail } from '@/hooks/queries/problem';
import { useMutation } from '@tanstack/react-query';

// store
import { useUserInfo } from '@/stores/useUserInfoStore';

// types
import { GetProblemDetailType, PostSubmitResponseType } from '@/type/problem';

// components
import { BasicButton } from '@/components';

// api
import { problemApi } from '@/apis/problem';

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/theme-tomorrow';

const ProblemSubmit = () => {
  const [code, setCode] = useState<string>('');
  const [isStart, setIsStart] = useState(true);
  const { problemId } = useParams();
  const navigate = useNavigate();
  const useInfo = useUserInfo();

  const { data: { data: problemDetailData = null } = {} } =
    useGetProblemDetail<GetProblemDetailType>(Number(problemId));

  const { mutate: submitAnswerMutation } = useMutation(
    ['submit', problemId],
    async () => {
      return await problemApi.postSumbitCode<PostSubmitResponseType>(problemId as string, code);
    },
    {
      onSuccess: (data) => {
        // 내 제출 , 전체 보기
        navigate(`/status?problem_id=${problemId}&sns_id=${useInfo.snsId}`);
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
    const makeTemplateCodeAtFirst = () => {
      if (isStart && problemDetailData !== null) {
        const templateStr = problemDetailData.template;
        setIsStart(false);
        setCode(templateStr);
      }
    };
    makeTemplateCodeAtFirst();

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

export default ProblemSubmit;
