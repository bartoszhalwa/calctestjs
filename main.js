const { BrowserWindow, app } = require('electron');

require("electron-reload")(__dirname)

let win

function createWindow () {
	win = new BrowserWindow({
		width: 480,
		height: 730,
		webPreferences: {
			nodeIntegration: true
		},
		autoHideMenuBar: true
	})

	win.loadFile("index.html")

	// win.webContents.openDevTools()

	win.on("closed", () => {
		win = null
	})
}

app.on("ready", () => {
	createWindow()
})

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit()
	}
})

app.on("activate", () => {
	if (win === null) {
		createWindow()
	}
})