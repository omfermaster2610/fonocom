/* eslint-disable @typescript-eslint/no-require-imports */

const { app, BrowserWindow } = require("electron");
const { spawn } = require("child_process");
const path = require("path");

let mainWindow;
let serverProcess;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // Esperar unos segundos a que Next.js levante
  setTimeout(() => {
    mainWindow.loadURL("http://localhost:3000");
  }, 4000); // Puedes ajustar este tiempo si quieres
}

app.whenReady().then(() => {
  // 👉 Iniciar el servidor de Next.js en modo producción
  serverProcess = spawn("npm", ["run", "start"], {
    cwd: path.join(__dirname), // Asegúrate que aquí esté tu proyecto
    shell: true,
    env: {
      ...process.env,
      PORT: "3000",
    },
  });

  serverProcess.stdout.on("data", (data) => {
    console.log(`[Next.js]: ${data}`);
  });

  serverProcess.stderr.on("data", (data) => {
    console.error(`[Next.js error]: ${data}`);
  });

  createWindow();
});

app.on("window-all-closed", () => {
  if (serverProcess) serverProcess.kill(); // 👉 Mata el proceso cuando cierres la app
  if (process.platform !== "darwin") {
    app.quit();
  }
});
