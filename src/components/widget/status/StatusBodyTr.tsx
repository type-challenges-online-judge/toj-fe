import AceEditor from 'react-ace';

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

  const COLUMN_EXTRA_TEXTS = ['', '', '', '점', '점', 'byte', ''];

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
              {item[columnKey as keyof SubmitType]} {COLUMN_EXTRA_TEXTS[idx]}
            </td>
          );
        })}
      </tr>

      {showedCode.has(item.submitNumber) && (
        <tr>
          <td colSpan={7}>
            <AceEditor
              placeholder="code input"
              mode="typescript"
              theme="tomorrow"
              name="typescript-editor"
              fontSize={16}
              value={item.code}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              tabSize={2}
              editorProps={{ $blockScrolling: true }}
              readOnly
              style={{ width: 'calc(100% - 40px)', height: '500px', margin: '10px 20px' }}
            />
          </td>
        </tr>
      )}
    </>
  );
};

export default StatusBodyTr;
