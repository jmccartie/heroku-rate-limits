[![npm version](https://badge.fury.io/js/heroku-rate-limits.svg)](http://badge.fury.io/js/heroku-rate-limits)

# heroku-rate-limits

A heroku plugin to return your current API rate-limits. (Requests to this endpoint do not count towards the rate limit.)


### Installation

Note: These Node.js plugins are available in the current Ruby CLI. No need to download a separate Toolbelt 4.0 CLI.

```bash
$ heroku plugins:install heroku-rate-limits
```

### Usage

```bash
$ heroku user:rate-limits
2400 requests remaining
```