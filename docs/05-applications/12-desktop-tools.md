# Desktop Tools

Three small utilities built into Omadeb, reachable from _Trigger_ in the Omadeb Menu or by hotkey.

## Reminders

A reminder is a desktop notification scheduled for later. It survives closing the terminal but not a reboot.

```bash
omadeb reminder 5                      # notify in 5 minutes
omadeb reminder 30 "Check the oven"    # with a message
omadeb reminder show                   # list what's pending, with times
omadeb reminder clear                  # cancel everything
```

| Hotkey                              | Action         |
| ----------------------------------- | -------------- |
| `Super` + `Control` + `R`           | Set a reminder |
| `Super` + `Control` + `Alt` + `R`   | Show pending   |
| `Super` + `Shift` + `Control` + `R` | Clear all      |

Setting one by hotkey prompts for the minutes first, then an optional message. Leave the message empty for a plain "your N minutes are up" notification.

Also at _Trigger > Reminder_ in the Omadeb Menu.

## Transcoding

`omadeb transcode` converts pictures and videos to shareable formats. Run it with no arguments to pick a file interactively from `~/Pictures` and `~/Videos`, then choose format and resolution.

```bash
omadeb transcode                                    # pick everything interactively
omadeb transcode --path ~/Downloads                 # limit the picker to one folder
omadeb transcode ~/Videos/demo.mov mp4 1080p
omadeb transcode ~/Pictures/photo.heic jpg medium
```

| Type     | Formats      | Resolutions             |
| -------- | ------------ | ----------------------- |
| Pictures | `jpg`, `png` | `high`, `medium`, `low` |
| Videos   | `mp4`, `gif` | `4k`, `1080p`, `720p`   |

The output lands next to the input as `name-<resolution>.<format>`. The original is left alone.

`Super + Ctrl + .` opens the interactive picker. Files and folders also have a **Transcode** entry in the Nautilus right-click menu.

`omadeb transcode ascii` turns a PNG or SVG into text art, which is what the About screen uses. See [Branding](/manual/configuration/branding).

## Sharing

Send files to another device with [LocalSend](https://localsend.org), over the local network and without an account. LocalSend must be installed first, from _Install > Service > LocalSend_.

```bash
omadeb share clipboard                    # send the current clipboard as a text file
omadeb share file ~/Downloads/report.pdf
omadeb share file                         # pick files with fzf, Tab for multiple
omadeb share folder
```

`Super + Ctrl + S` opens the share menu, which also has a **Receive** entry to open LocalSend and accept an incoming transfer. Files and folders have a **Send with LocalSend** entry in the Nautilus right-click menu.

Transfers run detached, so closing the terminal does not cancel them.
