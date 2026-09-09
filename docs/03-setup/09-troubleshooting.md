# Troubleshooting

If you encounter any errors, this section is a good place to start troubleshooting. For questions that aren't about something being broken, see the [FAQ](/manual/setup/faq).

## I broke my system with an update

`omadeb reinstall` restores the default packages and configs. Your own files are untouched, but customized Omadeb configs are overwritten. To reset a single config instead, use _Update > Config_ in the Omadeb Menu.

Migration backups are kept in `~/.local/share/omadeb-backup-{timestamp}/`.

## Diagnostics

`omadeb debug` collects system state into `/tmp/omadeb-debug.log`: version and branch, hardware, session type, GNOME extensions, installed packages, and recent kernel messages. Attach it when reporting an issue.

```bash
omadeb debug              # write the log
omadeb debug --print      # write it and print it
omadeb debug --no-sudo    # skip the dmesg section, no sudo needed
```

## Installation

### Installation Failed

If installation fails, retry with:

```bash
source ~/.local/share/omadeb/install.sh
```

### Permission Issues

Ensure you have sudo privileges:

```bash
sudo -v
```

### LVM Encryption

If the system disk is encrypted using LVM, Omadeb will not apply the Plymouth customization.

This is intentional. Encrypted LVM setups require an early password prompt during boot, and overriding the default Plymouth behavior can interfere with that flow. To avoid breaking the unlock process, the migration simply skips the Plymouth customization when disk encryption is detected.

The system will boot normally using the default configuration required for encrypted volumes.

## Known Issue

### `X11` and `Walker`

`Walker` works correctly on both _Wayland_ and _X11_ sessions.

However, when running under _X11_, some visual styles may not be applied exactly as intended due to minor incompatibilities. This can result in a slightly less polished appearance compared to the Wayland experience, but functionality is not affected.

If you are using _Wayland_, you will get the intended visual experience. On _X11_, expect small cosmetic differences only.
