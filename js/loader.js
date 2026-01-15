window.load_self = function(path, callback) {
    const script = document.currentScript;

    fetch(path).then(res => res.text()).then(async text => {
        const fragment = document.createDocumentFragment();
        fragment.append(...Object.assign(document.createElement('div'), { innerHTML: await callback(text) }).children);
        script.replaceWith(fragment);
    });
}