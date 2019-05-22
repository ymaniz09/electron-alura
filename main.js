const { app, BrowserWindow, ipcMain } = require('electron');

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
          }
    });

    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});

app.on('window-all-closed', () => {
    app.quit();    
});

let aboutWindow = null;

ipcMain.on('open-about-window', () => {
    if (aboutWindow == null) { 
        aboutWindow = new BrowserWindow({
            width: 300,
            height: 220,
            alwaysOnTop: true,
            frame: false,
            webPreferences: {
                nodeIntegration: true
              }
        });

        aboutWindow.on('closed', () => {
            aboutWindow = null;
        });
    }

    aboutWindow.loadURL(`file://${__dirname}/app/about.html`);
});

ipcMain.on('close-about-window', () => {
    aboutWindow.close();
});