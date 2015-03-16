# winston-acs

A Node.ACS transport for [winston][0].

## Usage
``` js
  var winston = require('winston');
  var winstonAcs = require('winston-acs').Acs;
  
  winston.add(winstonAcs, options);
```

The Node.ACS transport accepts the following options:

* __level:__ Level of messages that this transport should log (defaults to `info`).

## Installation

### Installing npm (node package manager)

``` bash
  $ curl http://npmjs.org/install.sh | sh
```

### Installing winston-acs

``` bash
  $ npm install winston
  $ npm install winston-acs
```

#### Author: [Appcelerator](http://www.appcelerator.com)

[0]: https://github.com/indexzero/winston