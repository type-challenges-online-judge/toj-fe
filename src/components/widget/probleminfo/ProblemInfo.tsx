import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProblemList } from '../../../apis/get';
import {
  ProblemCategoryStyle,
  ProblemCodeBlockStyle,
  ProblemCodeStyle,
  ProblemDiffStyle,
  ProblemTitleStyle,
} from './ProblemInfo.css';

// 목데이터 전용으로 임시 생성.
type problemInfoType = {
  problemId: number;
  problemDiff: 'easy' | 'medium' | 'hard' | 'extreme';
  problemTitle: string;
  problemDescription: string;
  example: string[];
  template: string[];
  testCases: string[];
};
const ProblemInfo = () => {
  //const { problemId } = useParams();
  const problemId = 4;
  const [problemInfo, setProblemInfo] = useState<problemInfoType | null>(null);

  useEffect(() => {
    const updateProblemList = async () => {
      try {
        const res = await getProblemList();
        const currentProblem = res.filter((i: any) => i.problemId === problemId)[0];
        setProblemInfo(currentProblem);
      } catch (e) {}
    };
    updateProblemList();
  }, []);

  return (
    <>
      {problemInfo && (
        <div>
          <div>
            <p className={ProblemTitleStyle}>
              {problemInfo.problemTitle}
              <span className={ProblemDiffStyle[problemInfo.problemDiff]}>
                {problemInfo.problemDiff}
              </span>
            </p>
          </div>

          <p>{problemInfo.problemDescription}</p>

          <div>
            <p className={ProblemCategoryStyle}>예시</p>
            <pre className={ProblemCodeBlockStyle}>
              <code className={ProblemCodeStyle}>
                {problemInfo.example.map((line) => `${line}\n`)}
              </code>
            </pre>
          </div>

          <div>
            <p className={ProblemCategoryStyle}>제출 템플릿</p>

            <pre className={ProblemCodeBlockStyle}>
              <code className={ProblemCodeStyle}>
                {problemInfo.template.map((line) => `${line}\n`)}
              </code>
            </pre>
          </div>

          <div>
            <p className={ProblemCategoryStyle}>테스트 케이스</p>

            <pre className={ProblemCodeBlockStyle}>
              <code className={ProblemCodeStyle}>
                {problemInfo.testCases.map((line) => `${line}\n`)}
              </code>
            </pre>
          </div>
        </div>
      )}
    </>
  );
};

export default ProblemInfo;
