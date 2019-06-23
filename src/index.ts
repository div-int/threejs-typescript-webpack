import { Version } from './version';
let THREE = require('three');
let threejsdiv = document.getElementById('ThreeJS');

threejsdiv.innerHTML += `three.js version ${THREE.REVISION}<br>thteejs-typescript-webpack version ${Version}`;
