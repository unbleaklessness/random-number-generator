const { app, screen, BrowserWindow } = require('electron')

function createWindow () {
    
    const primaryDisplay = screen.getPrimaryDisplay()

    let wWidth = 225
    let wHeight = 30

    const w = new BrowserWindow({
            width: wWidth,
            height: wHeight,
            webPreferences: {
                nodeIntegration: true,
            },
            x: primaryDisplay.workArea.x + primaryDisplay.workArea.width - wWidth,
            y: primaryDisplay.workArea.y + primaryDisplay.workArea.height - wHeight,
            resizable: false,
            maximizable: false,
            minimizable: false,
            transparent: true,
            frame: false,
            alwaysOnTop: true,
            skipTaskbar: true,
    })

    w.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    app.quit()
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})