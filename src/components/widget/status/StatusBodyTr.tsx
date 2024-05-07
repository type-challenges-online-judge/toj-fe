import AceEditor from 'react-ace';
import { useEffect, useState } from 'react';

import { useGetSubmitItem } from '@/hooks/queries/status';
import { StatusType } from '@/type/status';

import { TdStyle, TrStyle } from './Status.css';
import useFormatSeconds from '@/hooks/useFormatSeconds';
import useFormatScore from '@/hooks/useFormatScore';
import useGetByte from '@/hooks/useGetByte';

interface StatusBodyTrProps {
  item: StatusType;
  showedCode: Set<number>;
  setShowedCode: React.Dispatch<React.SetStateAction<Set<number>>>;
}

const StatusBodyTr = ({ item, showedCode, setShowedCode }: StatusBodyTrProps) => {
  const [newItem, setNewItem] = useState<StatusType>(item);
  const [diffDate, setDiffDate] = useState<number>(-1);

  const openShowedCode = (submitNumber: number) => {
    setShowedCode((prevShowedCode) => {
      const newShowedCode = new Set(prevShowedCode);
      if (prevShowedCode.has(submitNumber)) {
        newShowedCode.delete(submitNumber);
      } else {
        newShowedCode.add(submitNumber);
      }

      return newShowedCode;
    });
  };

  const { data: checkCorrect, refetch: checkCorrectRefetch } = useGetSubmitItem({
    type: 'correct',
    id: item.id,
  });
  const { data: checkValid, refetch: checkValidRefetch } = useGetSubmitItem({
    type: 'valid',
    id: item.id,
  });

  // checkCorrect : 실제 채점 결과
  // newItem : 현재 문제에 대한 정보(채점 현황 및 점수)를 가지고 있는 상태. checkCorrect의 채점 state와 조금 차이가 있음
  // (checkCorrect를 기반으로 newItem을 업데이트 && 점수와 정확성 점수에 따라서도 리렌더링이 발생하므로 렌더링 싸이클이 조금 꼬인듯)

  useEffect(() => {
    // 테스트케이스가 없거나, 오류가 발생한 플래그가 아니고 && 현재 점수가 나온 상황이 아니라면
    if (![-5, -6].includes(newItem.correct_score) && !(newItem.correct_score >= 0)) {
      // 초단위 채점
      const intervalId = setInterval(() => {
        // 현재 채점중인 상황에 대한 객체
        const correctJudgeStatus = checkCorrect?.data.data.judgeStatus;

        if (correctJudgeStatus !== undefined) {
          // 채점중이라는 state값일 때
          if ([-4, -3, -2].includes(correctJudgeStatus.state)) {
            checkCorrectRefetch().then((res) => {
              if (res !== undefined) {
                setNewItem((prev) => ({
                  ...prev,
                  // 에러일 경우 -4, 그 외에는 현재 채점 state 적용
                  correct_score: res.status === 'error' ? -4 : correctJudgeStatus.state,
                }));
              }
            });
          }
          // 채점이 끝났다는 state값일 때
          else {
            setNewItem((prev) => ({
              ...prev,
              correct_score:
                // 채점이 끝났다면(-1) 점수, 아니라면 채점 state
                correctJudgeStatus.state === -1
                  ? correctJudgeStatus.score
                  : correctJudgeStatus.state,
            }));
          }
        }
        // 그것도 아니라면 refetch
        else {
          checkCorrectRefetch();
        }
      }, 3000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [checkCorrect, checkCorrectRefetch, newItem]);

  useEffect(() => {
    if (![-5, -6].includes(newItem.valid_score) && !(newItem.valid_score >= 0)) {
      const intervalId = setInterval(() => {
        const validJudgeStatus = checkValid?.data.data.judgeStatus;

        if (validJudgeStatus !== undefined) {
          if ([-4, -3, -2].includes(validJudgeStatus.state)) {
            checkValidRefetch().then((res) => {
              if (res !== undefined) {
                setNewItem((prev) => ({
                  ...prev,
                  valid_score: res.status === 'error' ? -4 : validJudgeStatus.state,
                }));
              }
            });
          } else {
            setNewItem((prev) => ({
              ...prev,
              valid_score:
                validJudgeStatus.state === -1 ? validJudgeStatus.score : validJudgeStatus.state,
            }));
          }
        } else {
          checkValidRefetch();
        }
      }, 3000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [checkValid, checkValidRefetch, newItem]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (newItem != null) {
        if (diffDate === -1) {
          const submitDate = new Date(newItem.createdAt);
          const nowDate = new Date();

          setDiffDate(
            // 9시간 차이 제거
            // Math.floor((nowDate.getTime() + 9 * 60 * 60 * 1000 - submitDate.getTime()) / 1000),
            Math.floor((nowDate.getTime() - submitDate.getTime()) / 1000),
          );
        } else {
          setDiffDate((prev) => prev + 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [diffDate, newItem]);

  return (
    <>
      <tr
        onClick={() => {
          openShowedCode(newItem.id);
        }}
        className={TrStyle}
      >
        <td className={TdStyle}>{newItem.id}</td>
        <td className={TdStyle}>{newItem.user.name}</td>
        <td className={TdStyle}>{newItem.problem.id}</td>
        <td className={TdStyle}>
          {useFormatScore(newItem.correct_score, checkCorrect?.data.data.judgeStatus)}
        </td>
        <td className={TdStyle}>
          {useFormatScore(newItem.valid_score, checkValid?.data.data.judgeStatus)}
        </td>
        <td className={TdStyle}>{useGetByte(newItem.code)}B</td>
        <td className={TdStyle}>{useFormatSeconds(diffDate)}</td>
      </tr>

      {showedCode.has(newItem.id) && (
        <tr>
          <td colSpan={7}>
            <AceEditor
              placeholder="code input"
              mode="typescript"
              theme="tomorrow"
              name="typescript-editor"
              fontSize={16}
              value={newItem.code}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              tabSize={2}
              editorProps={{ $blockScrolling: true }}
              readOnly
              style={{ width: 'calc(100% - 40px)', height: '250px', margin: '10px 20px' }}
            />
          </td>
        </tr>
      )}
    </>
  );
};

export default StatusBodyTr;
