import component from './components/dom';
import 'style-loader!css-loader!./theme/main.css'

let element = component();
document.body.appendChild(element);


if (module.hot) {
    module.hot.accept('./components/dom', function () {
        document.removeChild(element);
        element = component();
        document.body.appendChild(element);
        // Do something with the updated library module...
    });
}