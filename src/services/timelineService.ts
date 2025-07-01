import { request } from '@umijs/max';

export async function getTodayAPI(currentImageSource: string) {
  return request<any>(`https://api.nguaduot.cn/${currentImageSource}/today?json=1`, {
    method: 'GET',
    headers: {
      'Timeline-Client': 'wer7qx',
    }
  })
}