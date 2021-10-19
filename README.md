# Simple TODO application

<p align="center">
  <img src="https://github.com/dm1sh/toodo/raw/main/logo.png" alt="TooDo logo" width="150px">
</p>

## Overview

TooDo is a simple application for tasks management. It was built for my own usage because I didn't like the look or functionality of other todo apps.

## Deploy

Server side of application is not ready yet, so, you can deploy it as a single docker image

```bash
docker pull dm1sh/toodo:latest
docker run -p <port>:80 dm1sh/toodo:latest
```

To run it on baremetal:

```bash
git clone https://github.com/dm1sh/toodo
cd toodo
npm i
npm run build
npm run start
```

And finally, for development actions are quite similar to baremetal deploy:

```bash
git clone https://github.com/dm1sh/toodo
cd toodo
npm i
npm run dev
```

## TODO

- Convert to monorepo and add backend for tasks syncing
- Add ServiceWorker
- Switch to IndexedDB
