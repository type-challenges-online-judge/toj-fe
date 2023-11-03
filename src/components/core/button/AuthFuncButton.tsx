import { ButtonTextStyle, AuthFuncButtonStyle } from './AuthFuncButton.css';

interface AuthFuncButtonProps {
  text: string;
  _onClick: () => void;
  children: React.ReactNode;
}

function AuthFuncButton({ text, _onClick, children }: AuthFuncButtonProps) {
  return (
    <button className={AuthFuncButtonStyle} onClick={_onClick}>
      {children}
      <span className={ButtonTextStyle}>{text}</span>
    </button>
  );
}

export default AuthFuncButton;
