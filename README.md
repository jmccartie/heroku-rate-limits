# heroku-rate-limits

A heroku plugin to return your current API rate-limits. (Requests to this endpoint do not count towards the rate limit.)


### Installation

```bash
$ heroku plugins:install git://github.com/jmccartie/heroku-rate-limits.git
```

### Usage

```bash
$ heroku user:rate-limits
2400 requests remaining
```