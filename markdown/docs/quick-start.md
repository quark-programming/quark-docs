# Quick Start

All source code needed to build your first project can be found on the GitHub repository: [quark-programming/quark](https://github.com/quark-programming/quark)

## Building Globally

Start by creating a directory for the SDK files, I recommend creating the directory `~/SDK/quark`. In this directory, we can initialize the github repository and pull the code to the compiler:

```bash
# ~/SDK/quark
git init
git remote add origin https://github.com/quark-programming/quark.git
git branch -M main
git pull origin main
```

Whenever there is a new version or fix, you can run the `git pull` command to get the latest changes to the `main` branch on the repository.

Next, we need to build the compiler using `make`. You can either build the compiler with the default `qc` executable name, or specify one yourself:

```bash
make # or
make OUT=name
```

Finally, you can modify your `~/.bashrc` or `~/.zshrc` file to add the SDK to your `$PATH`,

```bash
# Add to the bottom of either '.bashrc' or '.zshrc'
export QUARK_ROOT="/absolute/path/to/JDK/quark"
export PATH="$PATH:$QUARK_ROOT"
```

After closing and restarting your terminal you should be able to run `qc` to get the current version,

```bash
qc -v
```

Just remember to include `$QUARK_ROOT` as an import directory whenever compiling,

```bash
qc [...] -l $QUARK_ROOT
```

## Building Locally

You can download the latest source code using the [latest release](https://github.com/quark-programming/quark/releases)

After downloading the source code, navigate to its folder and build the compiler using `make`. You can either build the compiler with the default `qc` executable name, or specify one yourself:

```bash
make # or
make OUT=name
```

You can then use the executable with the relative `./qc`:

```bash
./qc -v
```

<footer>
[Next: Hello World](#hello-world)
</footer>