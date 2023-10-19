import AceEditor from 'react-ace';
import { useEffect, useState } from 'react';

import { useGetSubmitItem } from '@/hooks/queries/status';
import { StatusType } from '@/type/status';

import { TdStyle, TrStyle } from './Status.css';
import useFormatSeconds from '@/hooks/useFormatSeconds';
import useFormatScore from '@/hooks/useFormatScore';

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

  useEffect(() => {
    if (![-5, -6].includes(newItem.correct_score) && !(newItem.correct_score >= 0)) {
      const intervalId = setInterval(() => {
        const correctJudgeStatus = checkCorrect?.data.data.judgeStatus;

        if (correctJudgeStatus !== undefined) {
          if ([-4, -3, -2].includes(correctJudgeStatus.state)) {
            checkCorrectRefetch().then((res) => {
              if (res !== undefined) {
                setNewItem((prev) => ({
                  ...prev,
                  correct_score: res.status === 'error' ? -4 : correctJudgeStatus.state,
                }));
              }
            });
          } else {
            setNewItem((prev) => ({
              ...prev,
              correct_score:
                correctJudgeStatus.state === -1
                  ? correctJudgeStatus.score
                  : correctJudgeStatus.state,
            }));
          }
        } else {
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
            Math.floor((nowDate.getTime() + 9 * 60 * 60 * 1000 - submitDate.getTime()) / 1000),
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
        <td className={TdStyle}>{newItem.user.snsId}</td>
        <td className={TdStyle}>{newItem.problem.id}</td>
        <td className={TdStyle}>
          {useFormatScore(newItem.correct_score, checkCorrect?.data.data.judgeStatus)}
        </td>
        <td className={TdStyle}>
          {useFormatScore(newItem.valid_score, checkValid?.data.data.judgeStatus)}
        </td>
        <td className={TdStyle}>{newItem.code.length}</td>
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
