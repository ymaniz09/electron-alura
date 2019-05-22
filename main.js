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

ipcMain.on('open-about-window', () => {
    let aboutWindow = new BrowserWindow({
        width: 300,
        height: 200
    });

    aboutWindow.loadURL(`file://${__dirname}/app/about.html`);
});