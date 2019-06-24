/*
Copyright (c) 2019 Matt Worzala <bhop.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/**
 * Cross platform handler to manage jvm installations.
 */

const { app, shell, ipcMain } = require('electron');
const Database = require('../app/database');
const path = require('path');
const fs = require('fs-extra');
const exec = require('child_process').exec;

// Useful paths
const baseDir = app.getPath('userData');

// JVM instance data store
const jvmDb = new Database(path.join(baseDir, 'jvm.db'));






// Helper Function
const getOsDefaultJavaDirectory = () => {
    switch (process.platform) {
        case "win32":
            return path.normalize('C:/Program Files/Java/');
        case "darwin":
            throw "Unsupported Operation";
        default:
            return path.normalize('/usr/lib/jvm/');
    }
};
