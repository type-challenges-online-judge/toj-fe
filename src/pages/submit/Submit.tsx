import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/theme-tomorrow';

import { submitAnswer } from '@/apis/problem';
import { BasicButton } from '@/components';
import { fetchProblemDataById } from '@/util/problem';

import { CodeInput, CodeInputWrapper } from './Submit.css';

const Submit = () => {
  const [code, setCode] = useState<string>('');
  const [isStart, setIsStart] = useState(true);
  const { problemId } = useParams();

  const navigate = useNavigate();

  // 캐싱 데이터 사용 (없을 경우 queryFn 적용)
  const { data } = useQuery({
    queryKey: ['problemInfo', { problemId: Number(problemId) }],
    queryFn: async () => await fetchProblemDataById(Number(problemId)),
    staleTime: Infinity,
  });

  const { mutate: submitAnswerMutation } = useMutation(
    async (code: string) => await submitAnswer(code),
    {
      onSuccess() {},
      onError: (err) => {
        console.error(err);
      },
    },
  );

  const submitAnswerOnClick = () => {
    submitAnswerMutation(code, {
      onSuccess: async () => {
        navigate(`/status?result_id=-1&problem_id=${problemId}&user_id=minh0518&mine=true`);
      },
    });
  };

  useEffect(() => {
    const getFirstValue = () => {
      if (isStart && data !== undefined) {
        const templateStr = data?.problemInfo.template?.join('');
        setIsStart(false);
        setCode(templateStr);
      }
    };
    getFirstValue();
  }, [data]);

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
