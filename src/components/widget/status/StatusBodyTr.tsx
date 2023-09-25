import { SubmitType } from '@/type/status';

import { TdStyle, TrStyle } from './Status.css';

interface StatusBodyTrProps {
  item: SubmitType;
  showedCode: Set<number>;
  setShowedCode: React.Dispatch<React.SetStateAction<Set<number>>>;
}

const StatusBodyTr = ({ item, showedCode, setShowedCode }: StatusBodyTrProps) => {
  const COLUMN_KEYS = [
    'submitNumber',
    'userId',
    'problemId',
    'accuracyScore',
    'validate',
    'codeLength',
    'submitDate',
  ];

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

  return (
    <>
      <tr
        onClick={() => {
          openShowedCode(item.submitNumber);
        }}
        className={TrStyle}
      >
        {COLUMN_KEYS.map((columnKey: string, idx: number) => {
          return (
            <td key={idx} className={TdStyle}>
              {item[columnKey as keyof SubmitType]}
            </td>
          );
        })}
      </tr>

      {showedCode.has(item.submitNumber) && (
        <tr>
          <td colSpan={7}>
            <div>{item.code}</div>
          </td>
        </tr>
      )}
    </>
  );
};

export default StatusBodyTr;
