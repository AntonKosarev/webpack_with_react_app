export default ( text = 'Dom Don Don' ) => {
    let element = document.createElement('div');
    element.innerHTML = text;
    return element;
}