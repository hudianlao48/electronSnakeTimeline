import { getTodayAPI } from '@/services/timelineService';
import { useState } from 'react';

export default () => {
  const [currentImageSource, setCurrentImageSource] = useState<string>('zzzmh');
  const [todayImage, setTodayImage] = useState<any>(null);
  const getTodayImage = async () => {
    const res = await getTodayAPI(currentImageSource);
    if (res.status === 1) {
      setTodayImage(res.data);
      return res.data;
    }
  };
  return {
    currentImageSource,
    setCurrentImageSource,
    todayImage,
    getTodayImage,
  };
};
