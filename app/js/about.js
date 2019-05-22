const { ipcRenderer, shell } = require('electron');

let linkClose = document.querySelector("#link-close");

linkClose.addEventListener('click', function () {
    ipcRenderer.send('close-about-window');
});

let linkGitHub = document.querySelector("#link-github");

linkGitHub.addEventListener('click', function () {
    shell.openExternal("https://github.com/ymaniz09/");
});

const process = require('process');

let electronVersion = document.querySelector('#electron-version');

window.onload = function () {
    electronVersion.textContent = process.versions.electron;
};
