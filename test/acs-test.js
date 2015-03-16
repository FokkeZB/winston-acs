/*
 * acs-test.js: Tests for instances of the Node.ACS transport
 *
 * (C) 2015 Appcelerator
 * MIT LICENCE
 *
 */

var path = require('path'),
    vows = require('vows'),
    assert = require('assert'),
    winston = require('winston'),
    helpers = require('winston/test/helpers'),
    Acs = require('../lib/winston-acs').Acs;

function assertAcs (transport) {
  assert.instanceOf(transport, Acs);
  assert.isFunction(transport.log);
};

var transport = new Acs();

vows.describe('winston-acs').addBatch({
 "An instance of the Node.ACS Transport": {
   "should have the proper methods defined": function () {
     assertAcs(transport);
   },
   "the log() method": helpers.testNpmLevels(transport, "should log messages to acs", function (ign, err, meta, result) {
     assert.isTrue(!err);
     assert.isObject(result);
   })
 }
}).export(module);