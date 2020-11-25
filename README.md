# Salesforce DX

The Salesforce DX plugin aggregates all force topic commands into a single plugin that is bundled with the [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli).

- [Salesforce DX Setup Guide](https://sfdc.co/sfdx_setup_guide)
- [Salesforce DX Developer Guide](https://sfdc.co/sfdx_dev_guide)
- [Salesforce CLI Command Reference](https://sfdc.co/sfdx_cli_reference)
- [Salesforce Developer Tools for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode)

## Installing

By default, the Salesforce DX plugin is bundled with the [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli).

```bash
sfdx plugins --core
```

### Install a "tagged" version of Salesforce DX

Use this to install a previous version of Salesforce DX or install a version that has not been promoted to the "latest" version.

The 'latest-rc' or latest release candidate is the version that is slated to go out next but hasn't been promoted to the "latest" version.

```bash
sfdx plugins:install salesforcedx@latest-rc
```

To set to a specific version:

```bash
sfdx plugins:install salesforcedx@50.6
```

Please report any issues at https://github.com/forcedotcom/cli/issues
