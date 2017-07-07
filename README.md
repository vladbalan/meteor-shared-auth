## Disclaimer

This package is intended for fast prototyping only, not production. I needed to use `admithub:shared-auth` in a Meteor/React project using react-router. Even though the package is built with Blaze and iron:router, the functionality works as intended. I only needed to hide the piece of html injected by Iron Router saying that there is no route defined for '/', by defining an empty Iron Router route. I must insist that you do not use this in production, as this is only a lazy quick fix.

## Meteor Shared Auth

For situations where you have *multiple meteor applications* running on
*separate domains* but which share the *same database*, this package allows you
to share the logged-in state among the applications -- e.g. if I log in to one,
I will be automatically logged in to the other.

All of the meteor applications must use Meteor.settings, and define the public
setting ``sharedAuthDomains``, e.g.:

    // settings.json
    {
        "public": {
            "sharedAuthDomains": ["http://example.com", "http://example2.com"]
        }
    }

Each application will attempt to share its logged-in (or logged out) state with
each of the listed domains.

### Install

Install with:

    meteor add vladbalan:shared-auth
