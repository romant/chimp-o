# Reproducing

There's a [bug](https://github.com/xolvio/chimp/issues/161). This reproduces it.g

--

You'll need a local instance of [chimp](https://github.com/xolvio/chimp) to run the test.

### To Run The Meteor App

export ROOT_URL="http://[IP_OF_YOUR_CONTAINER_HOST]"

```
docker run -d --name chimp-o -p 80:80 -e ROOT_URL="http://192.168.153.128" romant/chimp-o
chimp --watch --ddp=$ROOT_URL --path=tests
```
