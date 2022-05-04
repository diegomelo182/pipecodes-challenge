# PIPECODES CHALLENGE

*Follow the steps below for setup this project.*

Firstly you need to make the build of the docker images

```bash
$ docker-compose build
```

Now you need to run the npm install on the backend

```bash
$ docker-compose run --rm backend npm i
```

And now you need to run the npm install on the frontend

```bash
$ docker-compose run --rm frontend npm i
```

After that you can run up the applications running this command below

```bash
$ docker-compose up
```

