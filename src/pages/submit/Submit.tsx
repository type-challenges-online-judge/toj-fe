import React, { useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/theme-tomorrow';
import { CodeInput } from './Submit.css';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { MainProblem } from '@/type/problem';
import { getProblems } from '@/apis/get';
import { getProblemDataById } from '@/util/problem';

const Submit = () => {
  const [code, setCode] = useState<string>('');
  const [isStart, setIsStart] = useState(true);
  const { problemId } = useParams();

  const { data } = useQuery({
    queryKey: ['problemInfo', { problemId: Number(problemId) }],
    queryFn: async () => {
      const res: MainProblem = await getProblems();
      return getProblemDataById(res, Number(problemId));
    },

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
      <div className={CodeInput}>
        <AceEditor
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
      </div>
    </div>
  );
};

export default Submit;
