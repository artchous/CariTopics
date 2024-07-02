const {app, BrowserWindow} = require('electron')
const {join} = require("path");

let win;
let pid;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/logo.png`,
    webPreferences: {
      webSecurity: false
    }
  })


  win.loadURL(`file://${__dirname}/dist/cari-topics/browser/index.html`)

  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()

  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}

function startServer() {
  let server = `${join(app.getAppPath(), 'backend.jar')}`;
  console.log(`Launching server with jar ${server}...`);
  let serverProcess = require('child_process').spawn('java', ['-jar', server, '']);
  pid = serverProcess.pid;
  if (pid) {
    console.log('Server PID: ' + pid);
  } else {
    console.error('Failed to launch server process.');
  }
}

// Create window on electron initialization
app.on('ready', () => {
  startServer();
  createWindow();
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  let kill = require('tree-kill');
  kill(pid); //Kill server

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})
