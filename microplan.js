#!/usr/bin/env node
var program = require('commander')

program
  .version('0.0.1')
  .command('init [filename]', 'initialise file with template')
  .command('publish [filename]', 'publish the microservice')
  .command('login', 'login and save the credentials')
  .parse(process.argv)

if (!program.args.length) {
  program.help()
}
