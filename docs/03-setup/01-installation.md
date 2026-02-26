# Installation

Get started with Omadeb on your fresh Debian system

## Prerequisites

- [A fresh install of Debian](https://www.debian.org/distrib/) on your computer
- A stable connection, to avoid errors when downloading apps and packages

Omadeb is designed for **GNOME**. This means your Debian installation must include a GNOME desktop environment.

- If you installed Debian using the **Live GNOME** ISO, you’re good to go.
- If you installed Debian via **NetInst**, make sure to select **GNOME** in the software selection step of the installer. Only GNOME is required, any additional tools offered during installation are entirely at your discretion.

Installation requires a freshly installed Debian system. You can try it on an existing installation, but conflicts with already installed applications and configurations may occur, and you’ll likely lose much of your customization work.

## Install

To install Omadeb, simply run the following command in your terminal:

```bash
curl -fsSL https://omadeb.omakasui.org/install | bash
```

The command downloads Omadeb to your terminal and starts the installation. You’ll be asked for your username and email to configure Git, then later to confirm the extensions that will be installed. A reboot is required at the end.

**Rebooting is strongly recommended**, even just to let GNOME apply its updates.

If you encounter errors, you can consult the [dedicated section](/manual/setup/troubleshooting#installation) in **troubleshooting**.
