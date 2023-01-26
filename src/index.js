import {hot} from 'react-hot-loader/root';
import app from './App.js';
import dom from './components/dom';

let element = dom();
document.querySelector('#app').appendChild(element);

hot(() => {
    document.removeChild(element);
    element = app();
    document.body.appendChild(element);
});