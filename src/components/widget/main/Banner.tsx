import { BannerHrStyle, BannerInfoStyle, BannerStyle, BannerTitleStyle } from './Banner.css';

const Banner = () => {
  return (
    <div className={BannerStyle}>
      <div className={BannerTitleStyle}>TypeScript Online Judge</div>
      <div className={BannerHrStyle} />
      <div className={BannerInfoStyle}>
        type-challenges 문제를 풀고 온라인으로 채점받을 수 있는 플랫폼입니다.
      </div>
    </div>
  );
};

export default Banner;
