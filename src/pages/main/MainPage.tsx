import { Banner, MainProblems } from '@/components/widget';
import { MainPageStyle } from './MainPage.css';

const MainPage = () => {
  return (
    <div className={MainPageStyle}>
      <Banner />
      <MainProblems />
    </div>
  );
};

export default MainPage;
