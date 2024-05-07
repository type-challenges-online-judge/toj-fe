const NOT_EXIST = 'X';
const ERROR = '에러';
const WAITING = '채점 대기 중';
const PROGRESSING = '채점 진행 중';
const COMPLETE = `채점 중`;
const FINAL = `최종 점수 계산중..`;

const useFormatScore = (score: number, judgeStatus: any) => {
  if (score === undefined) return '';
  if (score >= 0) return `${score}점`;
  if (score === -6) return NOT_EXIST;
  if (score === -5) return ERROR;
  if (score === -4) return WAITING;
  if (score === -3) return PROGRESSING;

  // score가 -2인 상태에서
  // judgeStatus가 {state: -2, currentTestCase: 5, totalTestCaseLength: 5} >> 마지막 테스트케이스까지 채점 완료
  // {state: -1, score: 0} >> 채점 종료 및 점수 반환
  // 이렇게 변하는 찰나의 시점에는 judgeStatus.currentTestCase가 undefined가 발생하는 것을 방지
  if (score === -2 && judgeStatus != null && judgeStatus.state !== -1)
    return `${COMPLETE} (${judgeStatus.currentTestCase} / ${judgeStatus.totalTestCaseLength})`;

  // score는 -2인데, judgeStatus가 {state: -1, score: 0}로 나오고 나서
  // 다음 setInterval에서 리렌더링 돼서 score가 실제 점수(0이상의 값) 으로 반영 된다
  // 이 때 score는 -2인데, judgeStatus가 {state: -1, score: 0} 이때의 3초라는 순간에 대응
  if (score === -2 && judgeStatus != null && judgeStatus.state === -1) return `${FINAL}`;

  return score;
};

export default useFormatScore;
