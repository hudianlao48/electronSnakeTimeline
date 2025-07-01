export {};

declare global {
  interface Window {
    electronAPI: {
      closeApp: () => void;
      // 其他方法声明
    };
  }
}
