import { contextBridge, ipcRenderer } from 'electron';

const apiKey = 'electron';

const api: any = {
  versions: process.versions,
};

contextBridge.exposeInMainWorld(apiKey, api);

contextBridge.exposeInMainWorld('electronAPI', {
  closeApp: () => ipcRenderer.send('app-close'),
});
