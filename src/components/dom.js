export default ( text = 'Dom' ) => {
    let element = document.createElement('div');
    element.innerHTML = text;
    return element;
}