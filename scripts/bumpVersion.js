#!/bin/usr/env node

const { spawn } = require('child_process');
const fs = require('fs');

const getCurrentVersion = () => process.env.npm_package_version;

const apiFile = 'api.json';

fs.readFile(apiFile, 'utf-8', (err, data) => {
    if (err) throw err;
    const re = new RegExp('([0-9]+)\.([0-9]+)\.([0-9]+)', 'g');
    const updatedData = data.replace(re, getCurrentVersion())
    fs.writeFile(apiFile, updatedData, err => {
        if (err) throw err;
        spawn('git', ['add', apiFile]);
    });
});
