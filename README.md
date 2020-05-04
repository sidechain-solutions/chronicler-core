# Chronicler Core Node

Backend for running Chronicler Core Nodes. A Lisk SDK based decentralized Blockchain to store, audit, or verify various types of data.

See https://chronicler.cc for a live demo or https://api.chronicler.cc for API access.

### Prerequisites

First install the dependencies as detailed in the [Lisk SDK documentation](https://lisk.io/documentation/lisk-sdk/setup).

- Node.js
- PostgreSQL
- Python
- pm2 (recommended)

### Installation

After you have completed all of the prerequisites, clone the Chronicler repository and install the dependencies.

```
git clone https://github.com/sidechain-solutions/chronicler
cd chronicler
npm install
```

### Run

When everything is installed, you can run the node and view logs by executing the following command:

```
node index.js | npx bunyan -o short
```

Alternatively, you can run the node as a background service with PM2:

```
pm2 start --name chronicler index.js
```

Commands to start and stop the pm2 process are:

```
pm2 stop chronicler
pm2 start chronicler
```

### Start application on boot

If you want the application to automatically start on (re)boot, execute the command that is generated by running:

```
pm2 save
pm2 startup
```

### Verification

You can verify that your node is actively participating in the network by checking if your IP is present on the Explorer's [Network Monitor](https://explorer.chronicler.cc/networkMonitor).

### Forging

If you'd like to enable forging on your node, you can do so by following the guide as described in the [Lisk Core Documentation](https://lisk.io/documentation/lisk-core/configuration.html#_forging).

### Lisk Hub

To be able to use Lisk Hub with the Chronicler network, sign in using the following custom node: `https://api.chronicler.io`.

## License

Licensed under [MIT](https://github.com/sidechain-solutions/chronicler/blob/master/LICENSE).
