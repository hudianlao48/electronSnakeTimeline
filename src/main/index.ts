import { app, BrowserWindow, ipcMain, protocol } from 'electron';
import * as path from 'path';
import createProtocol from './createProtocol';

const isDevelopment = process.env.NODE_ENV === 'development';
let mainWindow: BrowserWindow;

protocol.registerSchemesAsPrivileged([
  {
    scheme: 'app',
    privileges: {
      secure: true,
      standard: true,
      supportFetchAPI: true,
      allowServiceWorkers: true,
    },
  },
]);

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 450,
    minWidth: 800,
    minHeight: 450,
    transparent: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false, // 禁用同源策略
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  if (isDevelopment) {
    mainWindow.loadURL('http://localhost:8000');
  } else {
    createProtocol('app');
    mainWindow.loadURL('app://./index.html');
  }
  mainWindow.setAspectRatio(16 / 9);
}

ipcMain.on('app-close', () => {
  app.quit();
});

app.on('ready', async () => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
