# APT Repositories

Omadeb maintains two APT repositories for packages Ubuntu doesn't carry, or carries in an older version.

| Repository              | Contains                                                                      |
| ----------------------- | ----------------------------------------------------------------------------- |
| `core.omakasui.org`     | Packages installed on every system, such as `omadeb-walker` and `omadeb-nvim` |
| `packages.omakasui.org` | Optional packages, and newer builds where Ubuntu's version lags               |

Both are configured during installation, and their keyrings are re-verified by `omadeb update keyring` as part of every update. The keyrings live in `/usr/share/keyrings/omakasui-core.gpg` and `omakasui-packages.gpg`, the sources in `/etc/apt/sources.list.d/`.

## Release Channels

Both repositories follow the **stable** and **dev** channels. Switching via _Update > Channel_ in the Omadeb Menu updates both sources.

```bash
omadeb version channel
```
