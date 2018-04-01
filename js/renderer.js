// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

'use strict';

const osap = require('osap');

osap(`display dialog "A dialog" buttons "OK" default button 1`);
