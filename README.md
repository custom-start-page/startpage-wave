https://github.com/custom-start-page/wave

# Wave

![preview image](/src/manifest/preview.png)

Original source: https://github.com/Tobias-Schoch/startpage-wave
Found via a Reddit post: https://www.reddit.com/r/startpages/comments/ggcfit/with_source_if_you_want_3/

## Hosting

This startpage needs to be hosted by a web server in order to work.

It's already hosted at https://wave.customstart.page for your convenience.

### Self host

If you want to self host, just run a web server pointed at the directory of `/src` and everything should work.

## Getting started with development

You can't just open the `/src/index.html` file in your web browser as this startpage requires use of [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and also needs to make HTTP requests to some JSON files.

Firefox will give the error:

```
Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at file:///D:/Dev/Sites/custom-start-page/retroracle/src/manifest/defaultData.json. (Reason: CORS request not http).
```

For local development, you can use a development web server such as:

- [http-server](https://www.npmjs.com/package/http-server) (NodeJS)
- [python server](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server#Running_a_simple_local_HTTP_server) (Python)
- IIS, WAMP, etc

Just open a terminal in the `/src` directory and run the web server.

## Packaging

Run:

```
dist.sh
```

This will create a `/dist` folder which can be zipped and released.
