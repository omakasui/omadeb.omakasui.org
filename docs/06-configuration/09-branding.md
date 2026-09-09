# Branding

The boot splash, the login screen, and the About window can all be replaced. Branding files live in `~/.config/omadeb/branding/`.

The simplest route is to follow a theme: _Style > Plymouth_ in the Omadeb Menu, or `omadeb plymouth set-by-theme "Tokyo Night"`. See [Themes](/manual/essentials/themes). The rest of this page is for picking colors and logos by hand.

## Screen

The About window (_About_ in the Omadeb Menu) shows system information beside an ASCII logo, read from `~/.config/omadeb/branding/about.txt`. Change it under _Style > About_:

- **Edit Text** opens the file in your editor
- **Set From Image** picks a PNG or SVG from `~/Pictures` and converts it to ASCII
- **Restore Default** puts the Omadeb logo back

From the terminal:

```bash
omadeb branding about text
omadeb branding about image
omadeb branding about reset
```

To tune the conversion, run it yourself:

```bash
omadeb transcode ascii ~/logo.svg ~/.config/omadeb/branding/about.txt --width 54 --height 26
```

Options: `--width`, `--height`, `--mode braille|block`, `--threshold 0-100`, `--invert`. Braille packs in more detail, block reads better at small sizes.

## Icons

Two images in the same folder can be swapped out: `notify.png` for desktop notifications, and `icon-launcher.png` for the Omadeb entry in the GNOME top bar.
