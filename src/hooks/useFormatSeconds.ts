const useFormatSeconds = (createdAt: Date, diffDate: number, isShowed: boolean): string => {
  if (isShowed) {
    // 세부 날짜
    const year = createdAt.getFullYear();
    const month = createdAt.getMonth() + 1;
    const day = createdAt.getDate();

    const formattedMonth = month < 10 ? '0' + month : month;
    const formattedDay = day < 10 ? '0' + day : day;

    const formattedDate = `${year}.${formattedMonth}.${formattedDay}`;
    return formattedDate;
  } else {
    // 지난 시간
    if (diffDate === -1) return '';
    const minutesAgo = Math.floor(diffDate / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const monthsAgo = Math.floor(daysAgo / 30);
    const yearsAgo = Math.floor(monthsAgo / 12);

    if (diffDate < 60) return `${diffDate}초 전`;
    else if (minutesAgo < 60) return `${minutesAgo}분 전`;
    else if (hoursAgo < 24) return `${hoursAgo}시간 전`;
    else if (daysAgo < 30) return `${daysAgo}일 전`;
    else if (monthsAgo < 12) return `${monthsAgo}달 전`;
    else return `${yearsAgo}년 전`;
  }
};

export default useFormatSeconds;
