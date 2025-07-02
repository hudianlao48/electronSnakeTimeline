import { objectToQueryParams } from '@/utils/format';
import { request } from '@umijs/max';

const KEY = 'stle_hhf'; // 1pv19v
export async function getTodayAPI(currentImageSource: string) {
  return request<any>(
    `https://api.nguaduot.cn/${currentImageSource}/today?${objectToQueryParams({
      json: 1,
    })}`,
    {
      method: 'GET',
      headers: {
        'Timeline-Client': KEY,
      },
    },
  );
}

export async function getWallPaperAPI(
  currentImageSource: string,
  params?: any,
) {
  return request<any>(
    `https://api.nguaduot.cn/${currentImageSource}/v3?${objectToQueryParams({
      ...params,
      json: 1,
    })}`,
    {
      method: 'GET',
      headers: {
        'Timeline-Client': KEY,
      },
    },
  );
}
