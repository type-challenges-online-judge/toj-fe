import React from 'react';
import useGetHighestScore from '@/hooks/useGetHighestScore';
import { useUserInfo } from '@/stores/useUserInfoStore';
import { Badge } from '@/svgs';
import { Level } from '@/type/problem';
import {
  ProfileBadgeStyle,
  ProfileImgStyle,
  UserImgAndBadgeStyle,
  UserNameStyle,
  UserProfileWrapperStyle,
} from './UserProfile.css';

const UserProfile = () => {
  const userInfo = useUserInfo();
  const highestScore = useGetHighestScore(userInfo.snsId);
  return (
    <div className={UserProfileWrapperStyle}>
      <div className={UserImgAndBadgeStyle}>
        <img src={userInfo.profileUrl} className={ProfileImgStyle} alt="github_profile_img" />
        <div className={ProfileBadgeStyle}>
          <Badge diff={highestScore as Level} usage="profile" />
        </div>
      </div>

      <p className={UserNameStyle}>{userInfo.name}</p>
    </div>
  );
};

export default UserProfile;
