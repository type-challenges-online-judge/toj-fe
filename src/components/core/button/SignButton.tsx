import { BsGithub } from 'react-icons/bs';
import { ButtonTextStyle, SignButtonStyle } from './SignButton.css';

interface SignButtonProps {
  text: string;
  _onClick: () => void;
  iconSize: number;
}

function SignButton({ text, _onClick, iconSize }: SignButtonProps) {
  return (
    <button className={SignButtonStyle} onClick={_onClick}>
      <BsGithub size={iconSize} /> <span className={ButtonTextStyle}>{text}</span>
    </button>
  );
}

export default SignButton;
