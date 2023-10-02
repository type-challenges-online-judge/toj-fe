import AceEditor from 'react-ace';

import { StatusType } from '@/type/status';

import { TdStyle, TrStyle } from './Status.css';

interface StatusBodyTrProps {
  item: StatusType;
  showedCode: Set<number>;
  setShowedCode: React.Dispatch<React.SetStateAction<Set<number>>>;
}

const StatusBodyTr = ({ item, showedCode, setShowedCode }: StatusBodyTrProps) => {
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
          openShowedCode(item.id);
        }}
        className={TrStyle}
      >
        <td className={TdStyle}>{item.id}</td>
        <td className={TdStyle}>{item.user.snsId}</td>
        <td className={TdStyle}>{item.problem.id}</td>
        <td className={TdStyle}>{item.correct_score}</td>
        <td className={TdStyle}>{item.valid_score}</td>
        <td className={TdStyle}>{item.code.length}</td>
        <td className={TdStyle}>{item.createAt}</td>
      </tr>

      {showedCode.has(item.id) && (
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
