# static-prototype
[![Build Status](https://travis-ci.org/christianheyn/static-prototype.svg?branch=master)](https://travis-ci.org/christianheyn/static-prototype)

**Basic repo for frontend prototypes**


### Install
```sh
$ git clone https://github.com/christianheyn/static-prototype.git
$ npm install
```

### Work
```sh
$ npm run watch:scss
$ npm install watch:js
```
*or*
```sh
$ npm install watch:all
```


### available mixins
```scss
// transition($task, $duration: 150ms, $wait: 0ms, $ease: ease-out)
@include transition(left, 150ms, 0, ease-out);
```



**Author**
[Christian Heyn](https://github.com/christianheyn)