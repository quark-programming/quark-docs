window.e = function(strings, ...inputs) {
    return Object.assign(document.createElement("div"), {
      innerHTML: strings.reduce(
        (acc, str, i) => acc + str + (inputs[i] ?? ""),
        ""
      ),
    }).children[0];
}