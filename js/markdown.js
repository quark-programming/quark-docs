window.markdown_language = (lang, text) =>
  ({
    bash: () =>
      text.replaceAll(/^(.+? )/gm, "<span style='color: #7AA89F'>$1</span>"),
    quark: () => text.replaceAll(
      /\b(const|extern)\b|\b(auto|int|typeof|sizeof|import|return|struct|if|while|for|type)\b|\b([ui]\d{1,2}|[iu]size|[iu]?char|[A-Z]\w*|\w+?_t|bool|void|str)\b|(\d+)|(".+?")|(\w+(?:(?=\()|(?=<.+?>\()))|(\w+)|(\\\n)|(\/\/.+?\n|\/\*.+?\*\/)|(\S)/g,
      (_, ...a) => [
        () => `<i style="color: #957FB8">${a[0]}</i>`,
        () => `<span style="color: #957FB8">${a[1]}</span>`,
        () => `<span style="color: #7AA89F">${a[2]}</span>`,
        () => `<span style="color: #D27E99">${a[3]}</span>`,
        () => `<span style="color: #98BB6C">${a[4]}</span>`,
        () => `<span style="color: #7E9CD8">${a[5]}</span>`,
        () => `<span style="color: #E6C384">${a[6]}</span>`,
        () => "<br />",
        () => `<span style="color: #727169">${a[8]}</span>`,
        () => `<span style="color: #9CABCA">${a[9]}</span>`,
      ][a.findIndex((x) => x)]()
    ),
  }[lang]());

window.markdown = (text) =>
  `<span>${text
    .replaceAll(
      /# (.+?)\n|\[(.+?\]\(.+?)\)|```(\w+\n[\s\S]+?)```|`(.+?)`/g,
      (_, ...a) =>
        [
          () => `<h1 color="white">${a[0]}</h1>\n`,
          () =>
            `<a href="${a[1]?.split("](")[1]}" ${
              a[1]?.split("](")[1].startsWith("#") ? "" : 'target="_blank"'
            } style="display: inline">${a[1]?.split("](")[0]}</a>`,
          () =>
            `<pre><code>${markdown_language(
              a[2]?.split("\n")[0],
              a[2]?.split("\n").slice(1).join("\n")
            )}</code></pre>`,
          () => `<code>${a[3]}</code>`,
        ][a.findIndex((x) => x)]()
    )
    .replaceAll(/\n\r?\n/g, "</span><span>")}</span>`;