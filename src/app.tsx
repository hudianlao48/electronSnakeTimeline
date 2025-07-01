// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<any> {
  return {
    name: '拾光',
    imageSourceList: [
      { value: 'lamia', label: '拉弥亚', desc: '不可描述' },
      { value: 'lsp', label: '老色批', desc: '不可描述' },
      { value: 'venus', label: '维纳斯', desc: '不可描述' },
      { value: 'snake', label: '故纸堆', desc: '所有图源的聚合版' },
      {
        value: 'snakemobile',
        label: '故纸堆（移动版）',
        desc: '所有图源的聚合版',
      },
      { value: 'glutton', label: '周度精选', desc: '拾光官方维护，周度精选' },
      {
        value: 'gluttonmobile',
        label: '周度精选（移动版）',
        desc: '拾光官方维护，周度精选',
      },
      { value: 'timeline', label: '拾光', desc: '拾光官方维护，每日一图' },
      { value: 'wander', label: '中转站', desc: '拾光官方维护' },
      { value: 'spotlight', label: 'Windows 聚焦', desc: '三方图源' },
      { value: 'bing', label: '必应', desc: '三方图源' },
      { value: 'nasa', label: 'NASA', desc: '三方图源' },
      { value: 'one', label: 'ONE · 一个', desc: '三方图源' },
      { value: 'ymyouli', label: '一梦幽黎', desc: '三方图源' },
      { value: 'netbian', label: '彼岸图网', desc: '三方图源' },
      { value: 'qingbz', label: '轻壁纸', desc: '三方图源' },
      { value: 'zzzmh', label: '极简壁纸', desc: '三方图源' },
      { value: 'toopic', label: '壁纸社', desc: '三方图源' },
      { value: 'wallhaven', label: 'wallhaven', desc: '三方图源' },
      { value: 'unsplash', label: 'Unsplash', desc: '三方图源' },
      { value: 'bizhihui', label: '壁纸汇', desc: '三方图源' },
      { value: 'wallhere', label: 'WallHere', desc: '三方图源' },
      { value: 'huamao', label: '花猫壁纸', desc: '三方图源' },
      { value: '3g', label: '3G 壁纸', desc: '三方图源' },
      { value: 'wallpaperup', label: 'WallpaperUP', desc: '三方图源' },
      { value: 'colorhub', label: 'colorhub', desc: '三方图源' },
      { value: 'pexels', label: 'Pexels', desc: '三方图源' },
      { value: 'dpm', label: '故宫博物院', desc: '三方图源' },
      { value: 'simple', label: 'Simple Desktops', desc: '三方图源' },
      { value: 'weilan', label: '蔚蓝主页', desc: '三方图源' },
      { value: 'abyss', label: 'Wallpaper Abyss', desc: '三方图源' },
      { value: 'backiee', label: 'backiee', desc: '三方图源' },
      { value: 'eso', label: 'ESO', desc: '三方图源' },
      { value: 'skitter', label: 'Skitterphoto', desc: '三方图源' },
      { value: 'obzhi', label: '乌云壁纸', desc: '三方图源' },
      { value: 'adwest', label: '公元桌面', desc: '三方图源' },
    ],
  };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    pure: true,
  };
};
