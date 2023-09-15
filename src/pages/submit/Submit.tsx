import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/theme-tomorrow';

import { CodeInput, CodeInputWrapper } from './Submit.css';

// util
import { fetchProblemDataById } from '@/util/problem';

const Submit = () => {
  const [code, setCode] = useState<string>('');
  const [isStart, setIsStart] = useState(true);
  const { problemId } = useParams();

  // 캐싱 데이터 사용 (없을 경우 queryFn 적용)
  const { data } = useQuery({
    queryKey: ['problemInfo', { problemId: Number(problemId) }],
    queryFn: async () => await fetchProblemDataById(Number(problemId)),
    staleTime: Infinity,
  });

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
          width="800px"
        />
      </div>
    </div>
  );
};

export default Submit;
