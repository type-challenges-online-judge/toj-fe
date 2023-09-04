import { MainPageStyle } from './MainPage.css';
import { Banner, MainProblems } from '../../components';

const MainPage = () => {
  return (
    <div className={MainPageStyle}>
      <Banner />
      <MainProblems />
    </div>
  );
};

export default MainPage;
