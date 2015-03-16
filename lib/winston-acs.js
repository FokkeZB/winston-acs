/*
 * winston-acs.js: Transport for logging to Appcelerator Node.ACS
 *                 (Special thanks to winston-riak)
 *
 * (C) 2015 Appcelerator
 * MIT LICENCE
 *
 */

var util = require('util'),
  logger,
  winston = require('winston');

//
// ### function Acs (options)
// Constructor for the Acs transport object.
//
var Acs = exports.Acs = winston.transports.Acs = function (options) {
  options = options || {};

  try {
    logger = require('acs').logger;

  } catch (err) {
    logger = console;
  }

  this.name = 'acs';
  this.level = options.level || 'info';
};

// 
// Inherit from `winston.Transport` so you can take advantage 
// of the base functionality and `.handleExceptions()`. 
// 
util.inherits(Acs, winston.Transport);

//
// ### function log (level, msg, [meta], callback)
// #### @level {string} Level at which to log the message.
// #### @msg {string} Message to log
// #### @meta {Object} **Optional** Additional metadata to attach
// #### @callback {function} Continuation to respond to when complete.
// Core logging method exposed to Winston. Metadata is optional.
//
Acs.prototype.log = function (level, msg, meta, callback) {

  // map verbose to debug
  if (level === 'verbose') {
    level = 'debug';
  }

  // default to info
  if (typeof logger[level] != 'function') {
    level = 'info';
  }

  logger[level](msg);

  callback(null, true)
};
