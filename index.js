'use strict';
let h     = require('heroku-cli-util');

exports.commands = [
  {
    topic: 'user',
    command: 'rate-limits',
    description: 'how many API requests remaining',
    help: 'how many API requests remaining',
    needsAuth: true,
    run: h.command(function* (context, heroku) {
      let data = yield heroku.request({ path: '/account/rate-limits'} );
      console.log(data["remaining"] + " requests remaining");
    })

  }
];