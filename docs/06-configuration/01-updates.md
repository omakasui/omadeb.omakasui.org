# Updates

## Update your system

It is recommended that you use the custom script in _Update > Omadeb_ (`Super + Alt + Space`) to update your system and Omadeb.

This pulls the latest Omadeb code and configs, runs any pending migrations to get your system in sync with the latest, updates all system packages from Debian, the GNOME extensions and all apps installed via Flatpak.

From the terminal, `omadeb update` does the same thing. `omadeb update available` checks whether a newer version exists without installing anything.

> [!warning]
> Avoid running `sudo apt upgrade` on its own. It updates packages but skips the migrations and config updates that keep your system in sync with the Omadeb release, so you can end up on new packages with old configuration.

If an update leaves the system in a bad state, see [Troubleshooting](/manual/setup/troubleshooting).

## Development Channel

Omadeb installs on the _stable_ channel, which tracks the `main` branch and is released only after a testing period.

The _dev_ channel tracks new features as they land. It's meant for developers, but it's also the right place if you want to try things early and report back.

Switch via _Update > Channel_ in the Omadeb menu. The APT sources follow the channel automatically.

## Restore Default Configs

If you've customized a configuration and want to go back to the Omadeb defaults, you can restore individual configs via _Update > Config_ in the Omadeb menu. Available options include GNOME settings, GDM, keybindings, Plymouth, Starship, Tmux and Walker.
