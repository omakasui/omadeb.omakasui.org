# APT Repository

Omadeb maintains a dedicated APT repository at `packages.omakasui.org` to distribute packages not available in Debian's standard repositories, and to keep certain packages more up to date.

## What It Contains

- **Omadeb-specific packages** — tools built or packaged for this configuration (e.g. `omadeb-walker`, `omadeb-nvim`, `omadeb-zellij`)
- **Updated packages** — packages where the Debian version lags behind and a newer release is preferred

## Automatic Setup

The repository is configured automatically during installation. The keyring is stored at `/usr/share/keyrings/omakasui-packages.gpg` and the source at `/etc/apt/sources.list.d/omakasui.list`.

## Release Channels

The repository supports **stable** and **dev** channels, matching the Omadeb update channels. Switching channels via _Update > Channel_ in the Omadeb Menu updates the APT source automatically.
