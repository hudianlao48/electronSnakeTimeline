import { useState } from 'react';
import { getTodayAPI } from '@/services/timelineService';

export default () => {
  const [currentImageSource, setCurrentImageSource] = useState<string>('unsplash');
  const [todayImage, setTodayImage] = useState<any>(null)
  const getTodayImage = async () => {
    const res = await getTodayAPI(currentImageSource);
    console.log(res);
    if (res.status === 1) {
      setTodayImage(res.data);
      return res.data;
    }

  }
  return {
    currentImageSource,
    setCurrentImageSource,
    todayImage,
    getTodayImage,
  }
}