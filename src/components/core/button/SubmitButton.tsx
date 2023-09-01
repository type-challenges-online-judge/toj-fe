import React from 'react';
import { MenuButton } from '../../widget/problemmenus/ProblemMenus.css';

const SubmitButton = ({ text, _onClick }: any) => {
  return (
    <button onClick={_onClick} className={MenuButton}>
      {text}
    </button>
  );
};

export default SubmitButton;
