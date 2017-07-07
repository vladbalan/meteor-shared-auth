Meteor.startup(function() {
  Router.route('/', function () {
    // console.log('iron router custom route');
  });

  Router.route("/shared-auth-frame", {
    name: "shared-auth-frame",
    template: 'sharedAuthFrame',
    layoutTemplate: 'emptyLayout',
    waitOn: function() {
      return {ready: function() { return !Meteor.loggingIn(); }}
    }
  });
});
