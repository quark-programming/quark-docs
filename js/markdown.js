window.markdown_language = (lang, text) =>
  ({
    bash: () =>
      text.replaceAll(/\b(export)\b|^([^#]+? )|(\$[A-Z_]+)\b|\b(\w+(?==))|(#.+?\n)/gm,
        (_, ...a) => [
          () => `<i style="color: #957FB8">${a[0]}</i>`,
          () => `<span style='color: #7AA89F'>${a[1]}</span>`,
          () => `<span style='color: #D27E99'>${a[2]}</span>`,
          () => `<span style='color: #E6C384'>${a[3]}</span>`,
          () => `<span style='color: #727169'>${a[4]}</span>`,
        ][a.findIndex((x) => x)]()),
    quark: () => text.replaceAll(
      /\b(const|extern)\b|(#\w+|\b(?:void|auto|int|typeof|sizeof|import|return|struct|if|while|for|type)\b)|(\w+(?:(?=\()|(?=<.+?>\()))|\b([A-Z_]{2,})\b|\b([uif]\d{1,2}|[iu]size|[iu]?char|[A-Z]\w*|\w+?_t|bool|str)\b|(\d+)|(".+?")|(\w+)|(\\\n|\n(?=\n))|(\/\/.+?\n|\/\*[\s\S]+?\*\/)|(\S)/g,
      (_, ...a) => [
        () => `<i style="color: #957FB8">${a[0]}</i>`,
        () => `<span style="color: #957FB8">${a[1]}</span>`,
        () => `<span style="color: #7E9CD8">${a[2]}</span>`,
        () => `<span style="color: #FFA066">${a[3]}</span>`,
        () => `<span style="color: #7AA89F">${a[4]}</span>`,
        () => `<span style="color: #D27E99">${a[5]}</span>`,
        () => `<span style="color: #98BB6C">${a[6]}</span>`,
        () => `<span style="color: #E6C384">${a[7]}</span>`,
        () => "<br />",
        () => `<span style="color: #727169">${a[9]}</span>`,
        () => `<span style="color: #9CABCA">${a[10]}</span>`,
      ][a.findIndex((x) => x)]()
    ),
    none: () => text,
    c: () => markdown_language("quark", text),
  }[lang]?.() ?? text);

window.markdown = (text) =>
  `<span>${text
    .replaceAll(
      /(#+) (.+?)\n|\[(.+?\]\(.+?)\)|```(\w*\n[\s\S]+?)```|`(.+?)`|\*\*(.+?)\*\*|> (.+?)\n/g,
      (_, ...a) =>
        [
          () => `<h${a[0].length} color="white">${a[1]}</h${a[0].length}>\n`,
          null,
          () =>
            `<a href="${a[2]?.split("](")[1]}" ${
              a[2]?.split("](")[1].startsWith("#") ? "" : 'target="_blank"'
            } style="display: inline">${a[2]?.split("](")[0]}</a>`,
          () =>
            `<pre><code>${markdown_language(
              a[3]?.split("\n")[0],
              a[3]?.split("\n").slice(1).join("\n")
            )}</code></pre>`,
          () => `<code>${a[4]}</code>`,
          () => `<b>${a[5]}</b>`,
          () => `<i style="color: rgb(103, 103, 115); background: rgb(34, 34, 42); display: block; padding: .5em; border-radius: 4px; margin-left: .5em;">${a[6]}</i>\n`,
        ][a.findIndex((x) => x)]()
    )
    .replaceAll(/\n\r?\n/g, "</span><span>")}</span>`;