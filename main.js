const { app, BrowserWindow } = require("electron");
const electronReload = require("electron-reload"); // Importar electron-reload
const path = require("path");

//🌱 New Windows
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  //Instancia y Incrusta Html
  win.loadFile("./app/index.html");
};

//🌱 [Open]
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

//🌱 [Cerrar]
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

//🌱 autoreload - modo desarrollo 
electronReload(__dirname, {
  electron: path.join(__dirname, "node_modules", ".bin", "electron"),
});
