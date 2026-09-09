# Command Line

Everything the Omadeb Menu does is also a command.

```bash
omadeb <group> <command> [args...]
```

The individual binaries it dispatches to are still on your `PATH`, so `omadeb theme set` and `omadeb-theme-set` are the same thing.

## Discovery

The CLI documents itself, so you rarely need to look a command up here.

```bash
omadeb                     # overview and the list of groups
omadeb theme               # every command in the theme group
omadeb theme set --help    # usage, arguments, examples
omadeb commands            # every command, one per line
omadeb commands --all      # include hidden internal commands
omadeb commands --json     # machine-readable, for scripting
```

Tab completion is enabled in bash for groups, commands, and their arguments.

## Everyday Commands

| Command                         | Action                               |
| ------------------------------- | ------------------------------------ |
| `omadeb update`                 | Update Omadeb and system packages    |
| `omadeb version`                | Show the installed version           |
| `omadeb theme list`             | List available themes                |
| `omadeb theme set <name>`       | Apply a theme                        |
| `omadeb theme bg next`          | Cycle to the next background         |
| `omadeb font set <name>`        | Set the system monospace font        |
| `omadeb default browser <name>` | Set the default browser              |
| `omadeb reminder <minutes>`     | Set a reminder                       |
| `omadeb transcode`              | Transcode a picture or video         |
| `omadeb share file`             | Send a file with LocalSend           |
| `omadeb debug`                  | Collect diagnostics for a bug report |
| `omadeb menu`                   | Open the Omadeb Menu                 |

Commands that need root prompt for `sudo` themselves.
