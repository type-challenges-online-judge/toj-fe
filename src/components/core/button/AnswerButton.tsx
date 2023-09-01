import { MenuButton } from '../../widget/problemmenus/ProblemMenus.css';
import React from 'react';

const AnswerButton = ({ text, _onClick }: any) => {
  return (
    <button onClick={_onClick} className={MenuButton}>
      {text}
    </button>
  );
};

export default AnswerButton;
