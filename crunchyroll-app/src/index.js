const { app, BrowserWindow } = require("electron");
const path = require("node:path");

if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    title: "Crunchyroll App",
    webPreferences: {
      nodeIntegration: true,
    },
    icon: path.join(__dirname, "./src/icon.png"),
  });

  mainWindow.loadURL("https://www.crunchyroll.com");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
