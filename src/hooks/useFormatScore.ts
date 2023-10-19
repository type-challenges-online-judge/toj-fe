const NOT_EXIST = 'X';
const ERROR = '에러';
const WAITING = '채점 대기 중';
const PROGRESSING = '채점 진행 중';
const COMPLETE = `채점 중`;

const useFormatScore = (score: number, judgeStatus: any) => {
  if (score === undefined) return '';

  if (score >= 0) return `${score}점`;
  if (score === -6) return NOT_EXIST;
  if (score === -5) return ERROR;
  if (score === -4) return WAITING;
  if (score === -3) return PROGRESSING;
  if (score === -2 && judgeStatus != null)
    return `${COMPLETE} (${judgeStatus.currentTestCase} / ${judgeStatus.totalTestCaseLength})`;

  return score;
};

export default useFormatScore;
