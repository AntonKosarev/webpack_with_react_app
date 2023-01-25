import component from './components/dom';

let element = component();
document.body.appendChild(element);


if (module.hot) {
    module.hot.accept('./components/dom', function () {
        document.removeChild(element);
        element = component();
        document.body.appendChild(element);
    });
}
    });
}