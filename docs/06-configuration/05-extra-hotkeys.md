# Extra Hotkeys

Omadeb registers custom GNOME shortcuts through two commands, so there is no need to edit configuration files by hand.

```bash
omadeb gnome keybinding add <name> <command> <keybinding>
omadeb gnome keybinding drop <name>
```

For example:

```bash
omadeb gnome keybinding add "Notes" "obsidian" "<Super><Control>o"
omadeb gnome keybinding drop "Notes"
```

Run `omadeb gnome keybinding add` with no arguments to be prompted for the three values interactively.

Adding a shortcut that reuses an existing key combination replaces the old one. Removing is by name, not by key combination.

> [!note]
> Custom keybindings are reset by _Update > Config > Keybindings_ in the Omadeb Menu, which restores the Omadeb defaults.
